Lectures = new Meteor.Collection('lectures');
Messages = new Meteor.Collection('messages');
CurrentIndex = 0;

if (Meteor.isClient) {  
  Meteor.subscribe('lectures');
  Meteor.subscribe('allUsers');

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

    'click #dontUnderstand': function() {
      var currentLectureId = Session.get('currentLectureId');
      Messages.insert({content: "I don't understand this.", lecture: currentLectureId, presetType: "dontUnderstand"});
    }
  });

Template.updateTooFast.rendered = function() {
  $('#tooFastCount').fadeOut(200).fadeIn(200);
};

Template.updateTooSlow.rendered = function() {
  $('#tooSlowCount').fadeOut(100).fadeIn(100);
};

Template.updateGoBack.rendered = function() {
  $('#goBackCount').fadeOut(100).fadeIn(100);
};

Template.updateDontUnderstand.rendered = function() {
  $('#dontUnderstandCount').fadeOut(100).fadeIn(100);
};

Template.updateTooFast.helpers({
  tooFastCount: Messages.find({lecture: Session.get('currentLectureId'), presetType: "tooFast"}).count()
});

Template.updateTooSlow.helpers({
  tooFastCount: Messages.find({lecture: Session.get('currentLectureId'), presetType: "tooSlow"}).count()
});

Template.updateGoBack.helpers({
  tooFastCount: Messages.find({lecture: Session.get('currentLectureId'), presetType: "backSlide"}).count()
});

Template.updateDontUnderstand.helpers({
  tooFastCount: Messages.find({lecture: Session.get('currentLectureId'), presetType: "dontUnderstand"}).count()
});
}


