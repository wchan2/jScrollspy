;(function( $ ) {
  'use strict';

  var jScrollspy = {
    init: function(selector, options) {
      this.selector  = selector;
      this.$selector = $(selector);
      this.options   = $.extend({}, $.fn.jScrollspy.options, options);

      this.setupEvents();
    },
    setupEvents: function() {
      $(document).on('click', this.selector, function(event) {
        event.preventDefault();
        alert('hello');
      });
    }
  };

  $.fn.jScrollspy.options = {};
  $.fn.jScrollspy = function(options) {
    var self = this;

    return this.each(function() {
      var scrollspy = Object.create(jScrollspy);
      scrollspy.init(self.selector, options);
    });
  };
}( jQuery ));