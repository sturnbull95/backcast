var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('corgis');
    this.render();
    this.autoPlay = false;
  },
  selectFirst: function() {
      if (this.videos.length > 0) {
        this.videos.at(0).select();
      }
    },

  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: $('.player'),
      autoPlay: this.autoPlay,
    }).render();
    new VideoListView({
      collection: this.videos,
      el: $('.list')
    }).render();
    new SearchView({
      collection:this.videos,
      el: $('.search')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

//open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
