var thingsData = [
  {
    time: '12:01 PM',
    hr: '90',
    location: 'home'
  },
  {
    time: '3:45 PM',
    hr: "110",
    location: 'work'
  }
];
Template.thingsList.helpers({
  things: thingsData
})
