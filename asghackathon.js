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

  /* Button functionality */
  Template.studentDesktop.rendered = function() {
    var buttonsClicked = [];
    $('#hubdesktop-wrapper #hubdesktoppresets input').click(function() {
      var clickedButton = this;
      if(buttonsClicked.indexOf(clickedButton) < 0) {
        buttonsClicked.push(clickedButton);
        $(this).css('background-color', '#3E606F');
        var buttonTimer = setInterval(function() {
          $(clickedButton).css('background-color', '#91AA9D');
          var index = buttonsClicked.indexOf(clickedButton);
          buttonsClicked.splice(index, 1);
          window.clearInterval(buttonTimer)
        }, 3000);
      }
    });
  }



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
