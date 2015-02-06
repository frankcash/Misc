Tasks = new Mongo.Collection("tasks"); // connects to mongo

if (Meteor.isClient) {
// this code only runs on the client
  Template.body.helpers({
    tasks: function (){
      return Tasks.find({}, {sort:{createdAt: -1}});
    }
  });


  Template.body.events({
    "submit .new-task" : function (event){ // listens for submit event with anything that has class .new-task
      var text = event.target.text.value;
      Tasks.insert({
        text: text,
        createdAt: new Date() //current time
      });

      event.target.text.value = ""; //clears the form

      return false; // prevent default form submit
    }
  })


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}
