Lectures = new Meteor.Collection('lectures');
Messages = new Meteor.Collection('messages');
CurrentIndex = 0;


if (Meteor.isClient) {
  
  Meteor.subscribe('lectures');

  Template.createLecture.events({
    'click #submitLectureName': function() {
      var name = document.getElementById("lectureName").value;
      Lectures.insert({name: name, index: CurrentIndex++});
      document.getElementById("lectureName").value = '';
    }
  });

  Template.lectureDetail.events({
    

    'click #submitNewFeedback': function() {
      var content = document.getElementById("feedbackContent").value;
      var currentLecture = Session.get('currentLecture');
      Messages.insert({content: content, lecture: currentLecture});
      document.getElementById("feedbackContent").value = '';
    },

    'click #lectureTooFast': function() {
      var currentLecture = Session.get('currentLecture');
      Messages.insert({content: "Please slow down a bit!", lecture: currentLecture});
    },

    'click #lectureTooSlow': function() {
      var currentLecture = Session.get('currentLecture');
      Messages.insert({content: "You can speed up a bit", lecture: currentLecture});
    },
    'click #goBackSlide': function() {
      var currentLecture = Session.get('currentLecture');
      Messages.insert({content: "Can you go back a slide?", lecture: currentLecture});
    },

    'click #doNotUnderstandContent': function() {
      var currentLecture = Session.get('currentLecture');
      Messages.insert({content: "I don't understand this.", lecture: currentLecture});
    }
  });

  Router.map(function() {

    this.route('listLectures', {
      path: '/',
      data: function(){
        templateData = { 
          lectures: Lectures.find()
        };
        return templateData;
      }
    });

    this.route('lectureDetail', {
      
      path: '/:index',
      waitOn: function() {
        var currentLecture = parseInt(this.params.index);
        return Meteor.subscribe('messages', currentLecture);
      },
      data: function(){
        var currentLecture = parseInt(this.params.index);
        Session.set('currentLecture', currentLecture);
        templateData = { 
          lecture: Lectures.findOne({index: currentLecture}),
          messages: Messages.find({lecture: currentLecture})
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

    Meteor.publish('messages', function(currentLecture) {
      return Messages.find({lecture: currentLecture});
    })
  });
}
