var Videos = Backbone.Collection.extend({
  model: Video,
  url:'https://www.googleapis.com/youtube/v3/search',
  events: {
    'click .btn': 'search',
  },

  fetch: function(){
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url:'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        q: 'Hawaii',
        part:'snippet',
        maxResults: 5,
        //type: 'video',
        videoEmbeddable:'true',
        key: window.YOUTUBE_API_KEY,
      },
      //contentType: 'application/json',
      success: function (data) {
        //console.log(data)
        console.log('success');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('failed', data);
      }
    });
  },

  search: function(search){
    this.fetch();
  //   console.log(window.YOUTUBE_API_KEY)
  //   console.log(this)
  //   this.fetch({
  //     data:{
  //     part:'snippet',
  //     q: search,
  //     type: 'video',
  //     videoEmbeddable: "true",
  //     key :window.YOUTUBE_API_KEY,
  //   }
  // });
  }
});
