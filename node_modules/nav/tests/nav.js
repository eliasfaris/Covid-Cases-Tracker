var test = require('tape');
var nav = require('../');

test('test nav', function (t) {
    var items = [
        {name: 'Home', href: '/'},
        {name: 'Somewhere', href: '/somewhere/'},
        {name: 'Another Place', href: '/another-place/'}
    ];

    nav('body', items);

    var navList = document.querySelector('nav.nav-list ul');

    t.equal(navList.innerHTML, '<li class="item"><a href="/">Home</a></li><li class="item"><a href="/somewhere/">Somewhere</a></li><li class="item"><a href="/another-place/">Another Place</a></li>');
    t.end();
});
