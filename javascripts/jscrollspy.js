;(function( $ ) {
  'use strict';

  var jScrollspy = {
    defaults: {
      animate: true,
      navHighlight: null
    },
    init: function(selector, options) {
      this.selector = selector;
      this.$elems   = $(this.selector);
      this.options  = $.extend({}, this.defaults, options);

      this.setupEvents();
      this.setupSectionPositions();
      $(document).trigger('scroll');
    },
    setupEvents: function() {
      var self = this;

      var clickEvent = function(event) {
        event.preventDefault();
        var sectionDestination = $(event.currentTarget).attr('href'),
            sectionTopPosition = $(sectionDestination).offset().top;

        if (self.options.animate) {
          $('body').animate({ scrollTop: sectionTopPosition });
        } else {
          $('body').scrollTop(sectionTopPosition);
        }
      };

      var scrollEvent = function() {
        // find the current section by the top and bottom positions
        var currentSection = $.grep(self.sectionPositions, function(elemPosition) {
          return elemPosition.top <= document.body.scrollTop && document.body.scrollTop < elemPosition.bottom;
        })[0];

        if (self.options.navHighlight) {
          self.$elems.removeClass(self.options.navHighlight);
          currentSection.$navElem.addClass(self.options.navHighlight);
        }
      };

      $(document)
        .on('click', this.selector, clickEvent)
        .on('scroll', scrollEvent);
    },
    setupSectionPositions: function() {
      var self = this;

      this.sectionPositions = $.map(this.$elems, function(elem) {
        var sectionId = $(elem).attr('href'),
            $section = $(sectionId),
            sectionTop = $section.offset().top - parseInt($section.css('padding-top'), 10) - parseInt($section.css('margin-top'), 10),
            href = $section.attr('id'),
            $navElem = self.$elems.filter('[href="#' + href + '"]');

        return {
          $navElem: $navElem,
          $section: $section,
          top: sectionTop,
          bottom: sectionTop + $section.outerHeight()
        };
      });
    }
  };

  $.fn.jScrollspy = function(options) {
    var scrollspy = Object.create(jScrollspy);
    scrollspy.init(this.selector, options);
    return this;
  };

}( jQuery ));