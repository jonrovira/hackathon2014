Lectures = new Meteor.Collection('lectures');
Messages = new Meteor.Collection('messages');
CurrentIndex = 0;

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to our ASG Hackathon project.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.listLectures.helpers({
    lectures: function() 
    { 
      return Lectures.find(); 
    }
  });

  Template.createLecture.events({
    'click #submitLectureName': function() {
      var name = document.getElementById("lectureName").value;
      var index = Lectures.find().count();
      Lectures.insert({name: name, index: CurrentIndex++});
      document.getElementById("lectureName").value = '';
    }
  });

  Router.map(function() {

    this.route('listLectures', {
      path: '/',  
      data: function(){
        templateData: { 
          lectures: Lectures.find({}); 
        };
      }
    });

    this.route('lectureDetail', {
      path: '/:index',

      data: function(){

        var castIndexToInt = parseInt(this.params.index);
        var currentLecture = Lectures.findOne({index: castIndexToInt});
        console.log(currentLecture);
        templateData = { 
          name: currentLecture.name,
          messages: Messages.find({lecture: castIndexToInt})
        };
        return templateData;
      }
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
