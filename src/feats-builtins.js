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
        test: 'test=function(){return typeof Promise==="function" && typeof Promise.resolve==="function"}()',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
        ver: 'es6'
    },

    {
        title: '<code>Symbol</code>',
        test: 'test=function(){return typeof Symbol==="function" && typeof Symbol()==="symbol"}()',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor',
        ver: 'es6'
    },

    {
        title: '<code>Proxy</code> and <code>Reflect</code>',
        test: 'test=function(){return typeof Proxy==="function" && typeof Reflect==="object"}()',
        tip: 'var target = {};\nvar proxy = new <b>Proxy</b>(target, {\n  isExtensible(trapTarget) {\n    return <b>Reflect</b>.isExtensible(trapTarget);\n  },\n  preventExtensions(trapTarget) {\n    return false;\n  }\n});',
        ecma: '',
        ver: 'es6'
    },

    {
        title: 'Typed Arrays',
        //test1: 'test=function(){return typeof ArrayBuffer==="function" && typeof DataView==="function"}()',
        test: 'test=function(){var b=new ArrayBuffer(10),v=new DataView(b),a=new Int8Array(b);return v.buffer===b && a.buffer===b}()',
        tip: 'var buffer = new <b>ArrayBuffer</b>(10);\n\nvar view = new <b>DataView</b>(buffer);\n\nvar i8a = new <b>Int8Array</b>(buffer);',
        ecma: '',
        ver: 'es6'
    },

    {
        title: '',
        test: '',
        ecma: '',
        ver: 'es6'
    },
];
