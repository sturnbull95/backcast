var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    console.log('VIDEOS',this.videos)
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: $('.player')
    }).render();
    new VideoListView({
      collection: this.videos,
      el: $('.list')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
