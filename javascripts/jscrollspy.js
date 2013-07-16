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
      var self = this;
      
      $(document).on('click', this.selector, function(event) {
        event.preventDefault();
        var sectionDestination = $(event.currentTarget).attr('href')
          , sectionTopPosition = $(sectionDestination).offset().top;
        if (self.options.animate) {
          $('body').animate({ scrollTop: sectionTopPosition });  
        } else {
          $('body').scrollTop(sectionTopPosition);
        }
        
      });
    }
  };

  $.fn.jScrollspy = function(options) {
    var scrollspy = Object.create(jScrollspy);
    scrollspy.init( this.selector, options );

    return this;
  };
  $.fn.jScrollspy.options = { animate: true };

}( jQuery ));