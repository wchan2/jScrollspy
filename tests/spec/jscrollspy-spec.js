describe('jScrollspy', function() {
  it("is attached to jQuery's prototype and is a jQuery plugin", function() {
    expect($.fn.jScrollspy).toBeDefined();
    expect($.prototype.jScrollspy).toBeDefined();
    expect($.prototype.jScrollspy).toBe($.fn.jScrollspy);
  });
});