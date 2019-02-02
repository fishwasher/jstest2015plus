feats['Built-in objects'] = [

    {
        title: '<code>Set</code>',
        test: 'test=function(){var s=new Set();s.add(1);s.add("1");s.add("1");s.add({});s.add({});return s.size===4;}();',
        tip: 'let set = new <b>Set()</b>;\nset.add(1);\nset.add("1");\nset.add(1);\nconsole.log(set.size); <i>// 2</i>',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects',
        ver: 'es6'
    },

    {
        title: '<code>WeakSet</code>',
        test: 'test=function(){var s=new WeakSet(),k={};s.add(k);return s.has(k);}();',
        tip: 'let set = new <b>WeakSet()</b>, key = {};\nset.add(key);\nkey = null; <i>// set is empty</i>',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects',
        ver: 'es6'
    },

    {
        title: '<code>Map</code>',
        test: 'test=function(){var m=new Map();m.set(1, true);return m.get(1);}();',
        tip: 'let map = new <b>Map()</b>;\nmap.set(1, "one");\nmap.set("1", "different one");',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects',
        ver: 'es6'
    },

    {
        title: '<code>WeakMap</code>',
        test: 'test=function(){var m=new WeakMap(),k={};m.set(k, true);return m.get(k);}();',
        tip: 'let map = new <b>WeakMap()</b>, key = {};\nmap.set(key, "value");\nkey = null; <i>// map is empty</i>',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects',
        ver: 'es6'
    },

    {
        title: '<code>Promise</code>',
        test: 'test=function(){return typeof Promise==="function" && typeof Promise.resolve==="function"}()',
        tip: 'let promise = new <b>Promise</b>(function(resolve, reject) {\n  setTimeout(function() {\n    resolve("resolved");\n  }, 100);\n});\n\npromise.then(function(value){\n  console.log(value); <i>// resolved</i>\n});',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
        ver: 'es6'
    },

    {
        title: '<code>Symbol</code>',
        test: 'test=function(){return typeof Symbol==="function" && typeof Symbol()==="symbol"}()',
        tip: 'let sym = <b>Symbol()</b>, obj = {};\nobj[sym] = "value";',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor',
        ver: 'es6'
    },

    {
        title: 'Well-Known Symbols',
        test: 'test=function(){return Symbol.hasInstance && Symbol.isConcatSpreadable && Symbol.iterator && Symbol.match && Symbol.replace && Symbol.search && Symbol.species && Symbol.split && Symbol.toPrimitive && Symbol.toStringTag && Symbol.unscopables && true || false}()',
        tip: 'function MyObject() {};\n\nMyObject.prototype[<b>Symbol.toStringTag</b>] = "Nothing";\n\nlet instance = new MyObject;\n\nconsole.log(instance.toString()); <i>// [object Nothing]</i>\nconsole.log(Object.prototype.toString.call(instance));  <i>// [object Nothing]</i>',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-well-known-symbols',
        ver: 'es6'
    },

    {
        title: '<code>Proxy</code> and <code>Reflect</code>',
        test: 'test=function(){return typeof Proxy==="function" && typeof Reflect==="object"}()',
        tip: 'var target = {};\nvar proxy = new <b>Proxy</b>(target, {\n  isExtensible(trapTarget) {\n    return <b>Reflect</b>.isExtensible(trapTarget);\n  },\n  preventExtensions(trapTarget) {\n    return false;\n  }\n});',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-objects',
        ver: 'es6'
    },

    {
        title: '<code>ArrayBuffer()</code>',
        test: 'test=function(){var b=new ArrayBuffer(10);return b.byteLength===10}()',
        tip: 'let buffer = new <b>ArrayBuffer</b>(10);\n\nconsole.log(buffer.byteLength); <i>// 10</i>;',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-arraybuffer-objects',
        ver: 'es6'
    },

    {
        title: '<code>DataView()</code>',
        test: 'test=function(){var b=new ArrayBuffer(10),v=new DataView(b);return v.buffer===b}()',
        tip: 'let buffer = new ArrayBuffer(10);\n\nlet view = new <b>DataView</b>(buffer);\n\nconsole.log(view.buffer === buffer); <i>// true</i>',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-dataview-constructor',
        ver: 'es6'
    },

    {
        title: 'Typed Arrays',
        test: 'test=function(){return Int8Array && Uint8Array && Uint8ClampedArray && Int16Array && Uint16Array && Int32Array && Uint32Array && Float32Array && Float64Array && true}()',
        tip: 'let i16a = new <b>Int16Array</b>(2);\n\nconsole.log(i16a.length); <i>// 2</i>\nconsole.log(i16a.byteLength); <i>// 4</i>',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects',
        ver: 'es6'
    }
];
