var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.model, 'click', this.selectVideo);
  },
  render: function() {
    if(!this.model){
      this.$el.html('<div class="loading">Please wait...</div>');
    } else{
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
