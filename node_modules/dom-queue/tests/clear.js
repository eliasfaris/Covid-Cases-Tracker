var test = require('tape');
var Queue = require('../');

test('test clear', function (t) {
    var q = Queue({container: 'clear-list'});
    q.push(1);
    q.push(2);
    q.push(3);
    
    var list = document.querySelector('.clear-list');
    t.equal(list.children.length, 3);
    t.equal(list.innerHTML, '<li class="item">1</li><li class="item">2</li><li class="item">3</li>');

    q.clear();
    t.equal(list.children.length, 0);

    t.end();
});
