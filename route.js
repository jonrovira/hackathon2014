Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'    
});

if (Meteor.isClient) {  
Router.map(function() {

    this.route('login', {
      path: '/'
    })

    this.route('listLectures', {
      path: '/courses',
      data: function(){
        templateData = { 
          lectures: Lectures.find()
        };
        return templateData;
      }
    });

    this.route('adminTemplate', {
      path: '/:index/admin',
      action: function() {
        var currentLectureId = parseInt(this.params.index);
        var currentLecture = Lectures.findOne({index: currentLectureId});

        if (Meteor.userId() == null || Meteor.userId() != currentLecture.admin) {
          this.redirect('/');
        }
        else {
          this.render();
        }
      },

      waitOn: function() {
        var currentLectureId = parseInt(this.params.index);
        return Meteor.subscribe('messages', currentLectureId);
      },
      data: function(){
        var currentLectureId = parseInt(this.params.index);
        Session.set('currentLectureId', currentLectureId);
        templateData = {
          lecture: Lectures.findOne({index: currentLectureId}),
          messages: Messages.find({lecture: currentLectureId}),
          tooFast: Messages.find({lecture: currentLectureId, presetType: "tooFast"}),
          tooSlow: Messages.find({lecture: currentLectureId, presetType: "tooSlow"}),
          goBack: Messages.find({lecture: currentLectureId, presetType: "backSlide"}),
          dontUnderstand: Messages.find({lecture: currentLectureId, presetType: "dontUnderstand"}),
          tooFastCount: Meteor.call('countMessagesByPresetType', currentLectureId, "tooFast"),
          tooSlowCount: Meteor.call('countMessagesByPresetType', currentLectureId, "tooSlow"),
          goBackCount: Meteor.call('countMessagesByPresetType', currentLectureId, "backSlide"),
          dontUnderstandCount: Meteor.call('countMessagesByPresetType', currentLectureId, "dontUnderstand")
        };
        return templateData;
      }
    });

    this.route('studentPresetTemplate', {

      path: '/:index',
      action: function() {
        var currentLectureId = parseInt(this.params.index);
        var currentLecture = Lectures.findOne({index: currentLectureId});
        if (!currentLecture) {
          this.redirect('/');
        }
        else {
          this.render();
        }
      },
      waitOn: function() {
        var currentLectureId = parseInt(this.params.index);
        return Meteor.subscribe('messages', currentLectureId);
      },
      data: function(){
        var currentLectureId = parseInt(this.params.index);
        Session.set('currentLectureId', currentLectureId);
        templateData = { 
          lectures: Lectures.find(),
          lecture: Lectures.findOne({index: currentLectureId}),
          messages: Messages.find({lecture: currentLectureId})
        };
        return templateData;
      }

    });

    this.route('studentAskTemplate', {
      path: '/:index/ask',
      action: function() {
        var currentLectureId = parseInt(this.params.index);
        var currentLecture = Lectures.findOne({index: currentLectureId});
        if (Meteor.Device.isPhone() == false) {
          Router.go('/'+currentLectureId);
        }
        else if (!currentLecture) {
          this.redirect('/');
        }
        else {
          this.render();
        }
      },
      waitOn: function() {
        var currentLectureId = parseInt(this.params.index);
        return Meteor.subscribe('messages', currentLectureId);
      },
      data: function(){
        var currentLectureId = parseInt(this.params.index);
        Session.set('currentLectureId', currentLectureId);
        templateData = { 
          lectures: Lectures.find(),
          lecture: Lectures.findOne({index: currentLectureId}),
          messages: Messages.find({lecture: currentLectureId})
        };
        return templateData;
      }
    });

    this.route('notFound', {
      path: '*'
    });

  });
}