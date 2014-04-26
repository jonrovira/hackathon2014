Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'    
});

if (Meteor.isClient) {  
Router.map(function() {

    this.route('listLectures', {
      path: '/',
      template: 'promptChooseLecture',
      yieldTemplates: {
        'listLectures': {to: 'sidebar'}
      },
      data: function(){
        templateData = { 
          lectures: Lectures.find()
        };
        return templateData;
      }
    });

    this.route('adminLectureDetail', {
      path: '/:index/admin',
      yieldTemplates: {
        'adminLectureSidebar': {to: 'sidebar'}
      },
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
          tooFastCount: Messages.find({lecture: currentLectureId, presetType: "tooFast"}).count(),
          tooSlowCount: Messages.find({lecture: currentLectureId, presetType: "tooSlow"}).count(),
          goBackCount: Messages.find({lecture: currentLectureId, presetType: "backSlide"}).count(),
          dontUnderstandCount: Messages.find({lecture: currentLectureId, presetType: "dontUnderstand"}).count()
        };
        return templateData;
      }
    });

    this.route('studentLectureDetail', {

      path: '/:index',
      yieldTemplates: {
        'studentLectureSidebar': {to: 'sidebar'}
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
      },

    });


  });
}