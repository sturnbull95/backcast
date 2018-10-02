var VideoListEntryView = Backbone.View.extend({
  initialize: function(){
    this.render()
  },
  events : {
    'click .video-list-entry-title': 'handleClick'
  },
  // selectVideo: function(selection){
  //   console.log('SELECTION',selection)
  //   this.model = selection;
  // },
  handleClick: function(){
    // $('.video-player').append(new VideoPlayerView({model:this}).render().$el)
    // console.log(this.model.id.videoId)
    //this.model.selectVideo();
  },

  render: function() {
    this.$el.html(this.template(this.model.snippet));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
