var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render()
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({
      model: this.videos,
      collection: this.videos,
      el: this.$('.player')
    }).render();
    new VideoListView({
      model: this.collection,
      collection: this.videos,
      el: this.$('.list')
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
