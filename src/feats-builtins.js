feats['Built-in objects'] = [

    {
        title: '<code>Set</code>',
        test: 'test=function(){var s=new Set();s.add(1);s.add("1");s.add("1");s.add({});s.add({});return s.size===4;}();',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects',
        ver: 'es6'
    },

    {
        title: '<code>Map</code>',
        test: 'test=function(){var m=new Map();m.set(1, true);return m.get(1);}();',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects',
        ver: 'es6'
    },

    {
        title: '<code>Promise</code>',
        test: function(){
                return typeof Promise === 'function' && typeof Promise.resolve === 'function';
            },
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
        ver: 'es6'
    },

    {
        title: '<code>Symbol</code>',
        test: function(){
                return typeof Symbol==='function' && typeof Symbol() === 'symbol';
            },
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor',
        ver: 'es6'
    },

    {
        title: '',
        test: '',
        ecma: '',
        ver: 'es6'
    },
];
