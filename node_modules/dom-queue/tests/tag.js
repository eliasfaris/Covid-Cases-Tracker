var test = require('tape');
var Queue = require('../');

test('test push numbers', function (t) {
    var q = Queue({container: 'tag-num-list', tag: 'div'});
    q.push(1);
    q.push(2);
    q.push(3);
    
    var list = document.querySelector('.tag-num-list');
    t.equal(list.children.length, 3);

    t.equal(list.innerHTML, '<span class="item">1</span><span class="item">2</span><span class="item">3</span>');
    t.end();
});
