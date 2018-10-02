var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    //this.render()
    console.log(this)
    this.listenTo('.title', 'select', this.selectVideo);
  },
  selectVideo: function(selection){
    console.log('SELECTION',selection)
    this.model = selection;
    this.render();
  },
  render: function() {
    if(!this.model){
      this.$el.html('<div class="loading">Please wait...</div>');
    } else{
      this.$el.html(this.template(this.model.attributes))
    }
    $('body').append(this.$el)
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
