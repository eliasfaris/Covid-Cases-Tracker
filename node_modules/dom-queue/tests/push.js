var test = require('tape');
var Queue = require('../');

test('test push numbers', function (t) {
    var q = Queue({container: 'num-list'});
    q.push(1);
    q.push(2);
    q.push(3);
    
    var list = document.querySelector('.num-list');
    t.equal(list.children.length, 3);

    t.equal(list.innerHTML, '<li class="item">1</li><li class="item">2</li><li class="item">3</li>');
    t.end();
});

test('test push letters', function (t) {
    var q = Queue({container: 'letter-list'});
    q.push('a');
    q.push('b');
    q.push('c');

    var list = document.querySelector('.letter-list');
    t.equal(list.children.length, 3);
    t.equal(list.innerHTML, '<li class="item">a</li><li class="item">b</li><li class="item">c</li>');
    t.end();
});
