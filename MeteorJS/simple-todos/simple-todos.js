if (Meteor.isClient) {
// this code only runs on the client
  Template.body.helpers({
    tasks:[
      {text: "Learn MeteorJS"},
      {text: "Practice algos"},
      {text: "Read book"}
    ]
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
