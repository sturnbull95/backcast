var SearchView = Backbone.View.extend({

  events: {
    'click button': 'performSearch',
    'keyup': 'handleKeyUp',
    'keyup': 'handleTyping'
  },
  handleTyping: function(){
    this.liveSearch();
  },
  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.performSearch();
    }
  },
  liveSearch: function() {
    var query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
  },
  performSearch: function() {
    var query = this.$('input').val();
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
