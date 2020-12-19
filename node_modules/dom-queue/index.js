module.exports = Queue;

function Queue(options) {
    if (!(this instanceof Queue)) return new Queue(options);
    if (!options) {
        options = {};
    }

    this.container = options.container || 'queue';
    this.tag = options.tag || 'ul';
    this.parent = options.parent || document.body;

    if (options.childTag) {
        this.childTag = options.childTag;
    } else {
        this.childTag = this.tag === 'ul' ? 'li': 'span';
    }

    this.node = document.createElement(this.tag);
    this.node.className = this.container;
    this.parent.appendChild(this.node);
}

Queue.prototype.push = function (item) {
    var child = document.createElement(this.childTag);
    child.innerHTML = item;
    child.className = 'item';
    this.node.appendChild(child);
};

Queue.prototype.pop = function () {
    if (this.node.lastChild) {
        this.node.removeChild(this.node.lastChild);
    }
};

Queue.prototype.shift = function () {
    if (this.node.firstChild) {
        this.node.removeChild(this.node.firstChild);
    }
};

Queue.prototype.remove = function (index) {
    if (this.node.childNodes[index]) {
        this.node.removeChild(this.node.childNodes[index]);
    }
};

Queue.prototype.clear = function () {
    if (this.node.childElementCount === 0) {
        return;
    }

    this.pop();
    this.clear();
};
