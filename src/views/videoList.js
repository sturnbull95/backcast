var VideoListView = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children().append(window.exampleVideoData.map(function(video){
      return new VideoListEntryView({model:video}).render().$el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
