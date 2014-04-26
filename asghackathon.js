Lectures = new Meteor.Collection('lectures');
Messages = new Meteor.Collection('messages');
CurrentIndex = 0;


Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'    
});

if (Meteor.isClient) {  
  Meteor.subscribe('lectures');
  Meteor.subscribe('allUsers');

  /*Template.createLecture.events({
    'click #submitLectureName': function() {
      var name = document.getElementById("lectureName").value;
      Lectures.insert({name: name, index: CurrentIndex++});
      document.getElementById("lectureName").value = '';
    }
  });

  Template.linkLecturesAndAdmins.events({
    'click #submitLinkLectureAndAdmin': function() {
      var adminEmail = document.getElementById("linkEmail").value;
      var lectureID = document.getElementById("linkLecture").value;
      var admin = Meteor.users.find({'emails.address': adminEmail});
      var lecture = Lectures.find({index: lectureID});
      admin.
    }
  }) */

  Template.listLectures.events({
    'click #chooseLecture': function() {
      var chosenLectureId = parseInt(document.getElementById("chooseLectureList").value);
      Router.go('/'+chosenLectureId);
    }
  })

  Template.studentLectureSidebar.events({

    'click #submitNewFeedback': function() {
      var content = document.getElementById("feedbackContent").value;
      var currentLectureId = Session.get('currentLectureId');
      Messages.insert({content: content, lecture: currentLectureId, presetType: false});
      document.getElementById("feedbackContent").value = '';
    },

    'click #lectureTooFast': function() {
      var currentLectureId = Session.get('currentLectureId');
      Messages.insert({content: "You're going too fast!", lecture: currentLectureId, presetType: "tooFast"});
    },

    'click #lectureTooSlow': function() {
      var currentLectureId = Session.get('currentLectureId');
      Messages.insert({content: "Please go a bit faster", lecture: currentLectureId, presetType: "tooSlow"});
    },
    'click #goBackSlide': function() {
      var currentLectureId = Session.get('currentLectureId');
      Messages.insert({content: "Can you go back a slide?", lecture: currentLectureId, presetType: "backSlide"});
    },

    'click #doNotUnderstandContent': function() {
      var currentLectureId = Session.get('currentLectureId');
      Messages.insert({content: "I don't understand this.", lecture: currentLectureId, presetType: "dontUnderstand"});
    }
  });

  /*Template.exportFeedback.events({
    'click #exportSubmit': function() {
      var htmlToSend = "Hi,<br>You're getting this email because someone requested an export from Census. Here's the export:<br>";
      var messagesToExport = Messages.find({lecture: Session.get('currentLectureId')}).fetch();
      for (var i = 0; i < messagesToExport.length; i++) {
        htmlToSend += messagesToExport[i].content;
        htmlToSend += "<br>";
      }
      htmlToSend += "Best,<br>The Census Team";
      Meteor.call('sendEmail', $('#exportEmail').val(), htmlToSend);
      Session.set('exportDone', true);
    }
  });

  Template.exportFeedback.exportDone = function() { return Session.get('exportDone', true); } */

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
          messages: Messages.find({lecture: currentLectureId})
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

  if (Meteor.isServer) {


    Meteor.startup(function () {
      // code to run on server at startup
      Meteor.publish('lectures', function() {
        return Lectures.find();
      });

      Meteor.publish('lecture', function(index) {
        return Lectures.find({index: index});
      });

      Meteor.publish('messages', function(currentLectureId) {
        return Messages.find({lecture: currentLectureId});
      });

      Meteor.publish('allUsers', function() {
        return Meteor.users.find({}, {
          fields: {
            'profile.email': 1,
            'profile.name': 1,
            'profile.createdAt': 1,
            'profile.adminFor': 1
          }
        });
      });

      if (Lectures.find().count() === 0) {
        var firstUser = Accounts.createUser({
          email: "pwh@outlook.com",
          password: "eecs111",
        });

        var secondUser = Accounts.createUser({
          email: "jon@outlook.com",
          password: "eecs211",
        });

        var thirdUser = Accounts.createUser({
          email: "nevil@outlook.com",
          password: "eecs212",
        });

        Lectures.insert({
          name: "EECS 111",
          index: CurrentIndex++,
          admin: firstUser
        });

        Lectures.insert({
          name: "EECS 211",
          index: CurrentIndex++,
          admin: secondUser
        });

        Lectures.insert({
          name: "EECS 212",
          index: CurrentIndex++,
          admin: thirdUser
        });
      };
    });

  /*Meteor.methods({
    sendEmail: function(email, html) {
      this.unblock();
      if (!Meteor.user()) {
        throw new Meteor.Error(403, "not logged in");
      }
      Email.send({
        to:email,
        from:'petehuang2015@u.northwestern.edu',
        subject:'Exported Feedback from Census',
        html: html,
      });
    }
  })*/
}
