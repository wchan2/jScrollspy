jScrollspy
==========

Scrollspy plugin in jQuery


options
--------
* **navHighlight** - class that is added to the navigation when the section that the nav element is responsible for is in view (default: undefined)
* **animate** - true or false parameter to specify whether the page should scroll to the designated section when the nav element is clicked(default true)

```javascript
$('.navscroll').jScrollspy({
	navHighlight: 'test-class',
	animate: true
});
```