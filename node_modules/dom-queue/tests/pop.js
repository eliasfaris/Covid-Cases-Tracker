var test = require('tape');
var Queue = require('../');

test('test pop', function (t) {
    var q = Queue({container: 'pop-list'});
    q.push(1);
    q.push(2);
    q.push(3);
    q.pop();
    
    var list = document.querySelector('.pop-list');
    t.equal(list.children.length, 2);

    t.equal(list.innerHTML, '<li class="item">1</li><li class="item">2</li>');
    t.end();
});
