var VideoListEntryView = Backbone.View.extend({
  initialize: function(){
    this.render()
  },
  events : {
    'click .video-list-entry-title': 'handleClick'
  },
  handleClick: function(){
    console.log(this)
    this.$el.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.snippet));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
