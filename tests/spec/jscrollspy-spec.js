describe('jScrollspy', function() {
  it("is attached to jQuery's prototype and is a jQuery plugin", function() {
    expect($.fn.jScrollspy).toBeDefined();
    expect($.prototype.jScrollspy).toBeDefined();
    expect($.prototype.jScrollspy).toBe($.fn.jScrollspy);
  });

  it('has basic options', function() {
    expect($.fn.jScrollspy.options).toBeDefined();
  });
});

describe('jScrollspy options', function() {
  it('has an animate option', function() {
    expect($.fn.jScrollspy.options.animate).toBeDefined();
  });

  it('the default animate option is true', function() {
    expect($.fn.jScrollspy.options.animate).toBeTruthy();
  });
});