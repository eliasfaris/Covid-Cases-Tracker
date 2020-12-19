var test = require('tape');
var Queue = require('../');

test('test shift', function (t) {
    var q = Queue({container: 'shift-list'});
    q.push(1);
    q.push(2);
    q.push(3);
    q.shift();
    
    var list = document.querySelector('.shift-list');
    t.equal(list.children.length, 2);

    t.equal(list.innerHTML, '<li class="item">2</li><li class="item">3</li>');
    t.end();
});
