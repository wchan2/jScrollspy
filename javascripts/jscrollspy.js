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
        var sectionDestination = $(event.currentTarget).attr('href');
        $('body').animate({ scrollTop: $(sectionDestination).offset().top });
      });
    }
  };

  $.fn.jScrollspy = function(options) {
    var scrollspy = Object.create(jScrollspy);
    scrollspy.init( this.selector, options );

    return this;
  };
  $.fn.jScrollspy.options = {};

}( jQuery ));