feats['New built-in objects and extensions'] = [

    {
        title: '<code>Set</code>',
        fid: 'set',
        test: 'test=function(){var s=new Set();s.add(1);s.add("1");s.add("1");s.add({});s.add({});return s.size===4;}();',
        tip: 'let set = new <b>Set()</b>;\nset.add(1);\nset.add(<em>"1"</em>);\nset.add(1);\nconsole.log(set.size); <i>// 2</i>',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-set-objects',
        ver: 'es6'
    },

    {
        title: '<code>WeakSet</code>',
        fid: 'wset',
        test: 'test=function(){var s=new WeakSet(),k={};s.add(k);return s.has(k);}();',
        tip: 'let set = new <b>WeakSet()</b>, key = {};\nset.add(key);\nkey = null; <i>// set is empty</i>',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-weakset-objects',
        ver: 'es6'
    },

    {
        title: '<code>Map</code>',
        fid: 'map',
        test: 'test=function(){var m=new Map();m.set(1, true);return m.get(1);}();',
        tip: 'let map = new <b>Map()</b>;\nmap.set(1, <em>"one"</em>);\nmap.set(<em>"1"</em>, <em>"different one"</em>);',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-map-objects',
        ver: 'es6'
    },

    {
        title: '<code>WeakMap</code>',
        fid: 'wmap',
        test: 'test=function(){var m=new WeakMap(),k={};m.set(k, true);return m.get(k);}();',
        tip: 'let map = new <b>WeakMap()</b>, key = {};\nmap.set(key, <em>"value"</em>);\nkey = null; <i>// map is empty</i>',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects',
        ver: 'es6'
    },

    {
        title: '<code>Promise</code>',
        fid: 'prms',
        test: 'test=function(){return typeof Promise==="function" && typeof Promise.resolve==="function"}()',
        tip: 'let promise = new <b>Promise</b>(function(resolve, reject) {\n  setTimeout(function() {\n    resolve(<em>"resolved"</em>);\n  }, 100);\n});\n\npromise.then(function(value){\n  console.log(value); <i>// resolved</i>\n});',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
        ver: 'es6'
    },

    {
        title: '<code>Promise.prototype.finally()</code>',
        fid: 'prmsfnl',
        test: 'test=function(){return typeof Promise.prototype.finally==="function"}()',
        tip: 'let promise = new Promise(function(resolve, reject) {\n  setTimeout(function() {\n    reject(<em>"rejected"</em>);\n  }, 100);\n})\n.catch(function(value){\n  console.log(value);\n})\n.<b>finally</b>(function(){\n  console.log(<em>"Always works!"</em>);\n});\n',
        ecma: 'https://www.ecma-international.org/ecma-262/9.0/#sec-promise.prototype.finally',
        ver: 'es9'
    },

    {
        title: '<code>Symbol</code>',
        fid: 'sym',
        test: 'test=function(){return typeof Symbol==="function" && typeof Symbol()==="symbol"}()',
        tip: 'let sym = <b>Symbol()</b>, obj = {};\nobj[sym] = <em>"value"</em>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor',
        ver: 'es6'
    },

    {
        title: 'Well-Known Symbols',
        fid: 'wnsym',
        test: 'test=function(){return Symbol.hasInstance && Symbol.isConcatSpreadable && Symbol.iterator && Symbol.match && Symbol.replace && Symbol.search && Symbol.species && Symbol.split && Symbol.toPrimitive && Symbol.toStringTag && Symbol.unscopables && true || false}()',
        tip: 'function MyObject() {};\n\nMyObject.prototype[<b>Symbol.toStringTag</b>] = <em>"Nothing"</em>;\n\nlet instance = new MyObject;\n\nconsole.log(instance.toString()); <i>// [object Nothing]</i>\nconsole.log(Object.prototype.toString.call(instance));  <i>// [object Nothing]</i>',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-well-known-symbols',
        ver: 'es6'
    },

    {
        title: '<code>Proxy</code>',
        fid: 'pxy',
        test: 'test=function(){return typeof Proxy==="function" && typeof Reflect==="object"}()',
        tip: 'var target = {};\nvar proxy = new <b>Proxy</b>(target, {\n  isExtensible(trapTarget) {\n    return Reflect.isExtensible(trapTarget);\n  },\n  preventExtensions(trapTarget) {\n    return false;\n  }\n});',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-proxy-objects',
        ver: 'es6'
    },

    {
        title: '<code>Reflect</code>',
        fid: 'rflt',
        test: 'test=function(){return typeof Proxy==="function" && typeof Reflect==="object"}()',
        tip: 'var target = {};\nvar proxy = new Proxy(target, {\n  isExtensible(trapTarget) {\n    return <b>Reflect</b>.isExtensible(trapTarget);\n  },\n  preventExtensions(trapTarget) {\n    return false;\n  }\n});',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-reflect-object',
        ver: 'es6'
    },

    {
        title: '<code>ArrayBuffer</code>',
        fid: 'abuf',
        test: 'test=function(){var b=new ArrayBuffer(10);return b.byteLength===10}()',
        tip: 'let buffer = new <b>ArrayBuffer</b>(10);\n\nconsole.log(buffer.byteLength); <i>// 10</i>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-arraybuffer-objects',
        ver: 'es6'
    },

    {
        title: '<code>DataView</code>',
        fid: 'dtvw',
        test: 'test=function(){var b=new ArrayBuffer(10),v=new DataView(b);return v.buffer===b}()',
        tip: 'let buffer = new ArrayBuffer(10);\n\nlet view = new <b>DataView</b>(buffer);\n\nconsole.log(view.buffer === buffer); <i>// true</i>',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-dataview-constructor',
        ver: 'es6'
    },

    {
        title: 'Typed Arrays',
        fid: 'tpar',
        test: 'test=function(){return Int8Array && Uint8Array && Uint8ClampedArray && Int16Array && Uint16Array && Int32Array && Uint32Array && Float32Array && Float64Array && true}()',
        tip: 'let i16a = new <b>Int16Array</b>(2);\n\nconsole.log(i16a.length); <i>// 2</i>\nconsole.log(i16a.byteLength); <i>// 4</i>',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects',
        ver: 'es6'
    },

    {
        title: '<code>SharedArrayBuffer</code>',
        fid: 'shab',
        test: 'test=function(){var b=new SharedArrayBuffer(10);return b.byteLength===10}()',
        tip: 'let buffer = new <b>SharedArrayBuffer</b>(10);\n\nconsole.log(buffer.byteLength); <i>// 10</i>;',
        ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-sharedarraybuffer-objects',
        ver: 'es8',
        note: '<strong>SharedArrayBuffer</strong> was disabled by default in all major browsers on 5 January, 2018 in response to <a href="https://meltdownattack.com/">Spectre</a> vulnerability (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer">MDN</a>).'
    },

    {
        title: '<code>Atomics</code>',
        fid: 'atms',
        test: 'test=function(){return !!Atomics}()',
        tip: 'var buffer = new SharedArrayBuffer(16),\n  uint8 = new Uint8Array(buffer);\n\nuint8[0] = 1;\n\nconsole.log(Atomics.add(uint8, 0, 2)); <i>// 1</i>\n\nconsole.log(Atomics.load(uint8, 0)); <i>// 3</i>\n',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-typedarray-objects',
        ver: 'es8',
        note: 'The <strong>Atomics</strong> object provides atomic operations as static methods. They are used with <strong>SharedArrayBuffer</strong> objects'
    }
];
