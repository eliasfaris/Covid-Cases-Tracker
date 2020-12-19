nav
===

Make a nav

[![browser support](https://ci.testling.com/emkay/nav.png)](https://ci.testling.com/emkay/nav)

## Example

```
var nav = require('nav');

var items = [
        {name: 'Home', href: '/'},
        {name: 'Somewhere', href: '/somewhere/'},
        {name: 'Another Place', href: '/another-place/'}
    ];
    
nav('body', items); // selector, nav items
```
