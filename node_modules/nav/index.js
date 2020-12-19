var Dq = require('dom-queue');

module.exports = function (parentSelector, items) {
    var nav = document.createElement('nav');
    nav.setAttribute('class', 'nav-list');

    var parent = document.querySelector(parentSelector);
    parent.appendChild(nav);

    var navList = Dq({container: 'nav-list', parent: document.querySelector('nav.nav-list')});

    var makeListItem = function (item) {
        var link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;

        var dumb = document.createElement('div');
        dumb.appendChild(link);

        navList.push(dumb.innerHTML);
    };

    items.forEach(makeListItem);
};
