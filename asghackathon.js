Lectures = new Meteor.Collection('lectures');
Messages = new Meteor.Collection('messages');
CurrentIndex = 0;

if (Meteor.isClient) {  
  Meteor.subscribe('lectures');
  Meteor.subscribe('allUsers');

  Template.studentDesktop.events({
    'click #hubdesktopsend': function() {
      var content = document.getElementById("hubdesktopfield").value;
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', content, currentLectureId, false);
      document.getElementById("hubdesktopfield").value = '';
    },

    'click #lectureTooFast': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "You're going too fast", currentLectureId, "tooFast");

    },

    'click #lectureTooSlow': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "You're going too slow", currentLectureId, "tooSlow");

    },
    'click #goBackSlide': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "Can you go back a slide?", currentLectureId, "backSlide");

    },

    'click #dontUnderstand': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "I don't understand", currentLectureId, "dontUnderstand");

    }
  });

  Template.studentMobileAsk.events({
    'click #asksend': function() {
      var content = document.getElementById("askfield").value;
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', content, currentLectureId, false);
      document.getElementById("askfield").value = '';
    }
  });
  
  Template.studentMobilePresets.events({
    'click #lectureTooFast': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "You're going too fast", currentLectureId, "tooFast");
  
    },
  
    'click #lectureTooSlow': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "You're going too slow", currentLectureId, "tooSlow");
  
    },
    'click #goBackSlide': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "Can you go back a slide?", currentLectureId, "backSlide");
  
    },
  
    'click #dontUnderstand': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('createMessage', "I don't understand", currentLectureId, "dontUnderstand");
  
    }
  });

  Template.adminTemplate.events({
    'click #adminremoveall': function() {
      var currentLectureId = Session.get('currentLectureId');
      Meteor.call('clearAll', currentLectureId);
    }
  });
  
  Template.updateTooFast.rendered = function() {
    $('#tooFastCount').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  };
  
  Template.updateTooSlow.rendered = function() {
    $('#tooSlowCount').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  };
  
  Template.updateGoBack.rendered = function() {
    $('#goBackCount').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  };
  
  Template.updateDontUnderstand.rendered = function() {
    $('#dontUnderstandCount').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  };

  $(window).resize(function(){
    console.log('resize called');
    var width = $(window).width();
    if(width >= 1024) {
      $('#header ul li a i').removeClass('fa-2x').addClass('fa-3x');
    }
    else{
      $('#header ul li a i').removeClass('fa-3x').addClass('fa-2x');
    }
  })
  .resize();



}

if (Meteor.isServer) {
  Lectures.allow({ //can't do anything to lectures
    insert: function(userId, doc) {
      return false;
    },
    update: function(userId, doc, fieldNames, modifier) {
      return false;
    },
    remove: function(userId, doc) {
      return false;
    }

  });

  Messages.allow({
    insert: function(userId, doc) {
      return true;
    },
    update: function() {
      return false;
    },
    remove: function(userId, doc) {
      return (userId && userId == doc.admin);
    }

  });
}
