var Videos = Backbone.Collection.extend({
  model: Video,
  url:'https://www.googleapis.com/youtube/v3/search',
  events: {
    'click .btn': 'search',
  },
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.GET_YOUTUBE_API,
        q: query,
        maxResults: 10,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });

  },

  parse: function(response) {
    return response.items;
  }
});
