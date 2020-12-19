dom-queue
=========
[![browser support](https://ci.testling.com/emkay/dom-queue.png)](https://ci.testling.com/emkay/dom-queue)

A queue for the DOM. Not really a queue, but whatevs.

### Example

```
var Queue = require('dom-queue');
var q = Queue({container: 'some-list'});

q.push('a');
q.push('b');
q.push('c');
```

Outputs:
```
<ul class="some-list">
    <li class="item">a</li>
    <li class="item">b</li>
    <li class="item">c</li>
</ul>
```

### Queue

`var q = new Queue(options={})`

`options` consist of:

* `container` default: `queue`
* `tag` default: `ul`
* `parent` default: `body`
* `childTag` default: `li` if parent is `ul`. `span` otherwise.

### q.push(item)

Push an `item` onto the queue.

### q.pop()

Remove the last item that was pushed.

### q.shift()

Remove the first item.

### q.remove(index)

Remove the item where `index` is in the list.
