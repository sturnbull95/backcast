var VideoListEntryView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  events : {
    'click .video-list-entry-title': 'handleClick'
  },
  selectVideo: function(selection){
    var video = new Video(selection.model);
    new VideoPlayerView({
      model: video,
      collection: video,
      el: $('.player')
    }).render();
  },
  handleClick: function(){
    this.selectVideo(this);
  },

  render: function() {
    this.$el.html(this.template(this.model.snippet));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
