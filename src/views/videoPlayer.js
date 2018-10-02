var VideoPlayerView = Backbone.View.extend({

  initialize: function(){
    //this.render()
    console.log(this.model);
    this.listenTo(this.model, 'select', this.selectVideo);
  },
  selectVideo: function(selection){
    console.log('SELECTION',selection);
    console.log(this.model);
    this.render();
  },
  //<%=id.videoId%>
  render: function() {
    if(!this.model){
      this.$el.html('<div class="loading">Please wait...</div>');
    } else{
      this.$el.html(this.template(this.model.attributes));
      console.log('EL',this.el)
      console.log('hihi', this.model.snippet);
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
