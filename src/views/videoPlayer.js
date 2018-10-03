var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },
  events:{
    'click .autoPlay': 'toggle',
  },
  toggle: function(){
    this.autoPlay = !this.autoPlay;
      this.render();
  },
  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    console.log(this.model)
    if (this.model) {
      if(this.autoPlay === true){
        if(!this.model.attributes.id.includes('?autoplay=')) {
          //autoplay
          this.model.attributes.id += '?autoplay=1';
        }
        var opp = this.model.attributes.id.slice(this.model.attributes.id.length-1);
        if(opp === '0'){
          opp = '1';
          this.model.attributes.id = this.model.attributes.id.slice(0, this.model.attributes.id.length-1) + opp;
        }
      } else{
        if(!this.model.attributes.id.includes('?autoplay=')) {
          //autoplay
          this.model.attributes.id += '?autoplay=0';
        }
        var newOpp = this.model.attributes.id.slice(this.model.attributes.id.length-1);
        if(newOpp === '1'){
          newOpp = '0';
          this.model.attributes.id = this.model.attributes.id.slice(0, this.model.attributes.id.length-1) + newOpp;
        }
      }
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
        return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
