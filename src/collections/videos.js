var Videos = Backbone.Collection.extend({
  initialize: function(){
    this.listenTo(this.collection,'search',this.fetch);
  },
  model: Video,
//   fetch: function(){
//     $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://youtube.googleapis.com',
//   type: 'GET',
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });
//   },
//
//   search: function(){
//
//   }
});
