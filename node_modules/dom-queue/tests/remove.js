var test = require('tape');
var Queue = require('../');

test('test remove', function (t) {
    var q = Queue({container: 'remove-list'});
    q.push(1);
    q.push(2);
    q.push(3);
    q.remove(1);
    
    var list = document.querySelector('.remove-list');
    t.equal(list.children.length, 2);

    t.equal(list.innerHTML, '<li class="item">1</li><li class="item">3</li>');
    t.end();
});
