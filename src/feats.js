var editions = {
    es6: 'ECMAScript 6',
    js16: 'JavaScript 2016',
    js17: 'JavaScript 2017'
};

var feats = {

    'Syntax': [

        {
            title: '<code>let</code> and <code>const</code> declarations',
            test: 'test=function(){const a=true;let b=true;return a&&b}()',
            tip:  '<b>let</b> x, y = 0;\n<b>const</b> pi = Math.PI;',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations',
            ver: 'es6'
        },

        {
            title: 'Spread operator (<code>...</code>)',
            test: 'test=function(){var a=[1,2,3];return Math.min(...a)===1}()',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists-runtime-semantics-argumentlistevaluation',
            ver: 'es6'
        },

        {
            title: 'Destructuring declarations, assignment, parameters',
            test: 'test=function(){var arr=[1,2,3],obj={a:1, b:2, c:3},[a1,a2,a3,a4]=arr,{a,b,c,d=true}=obj;return a1===a&&a2===b&&a3===c&&!a4&&d}()',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment',
            ver: 'es6'
        },

        {
            title: 'Object literal syntax extension',
            test: 'test=function(){var prop=true;return{prop}}().prop',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-object-initialiser',
            ver: 'es6'
        },

        {
            title: '<code>for-of</code> loop',
            test: 'test=function(){var a=[0,1,2,3];for(var v of a){if(v===2){return true}}}()',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements',
            ver: 'es6'
        },

        {
            title: 'Octal literal <code>0o</code> prefix',
            test: 'test=function(){"use strict";return 0o10===8}()',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals',
            ver: 'es6'
        },

        {
            title: '<code>class</code> definition',
            test: 'test=function(){class c{constructor(){this.b=true;}}return new c().b;}();',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions',
            ver: 'es6'
        },
    ],

    'Object Extensions': [],

    'Strings': [

        {
            title: 'Template literals',
            test: 'test=function(){"use strict";var a=String.fromCharCode(98);return `a${a}c`==="abc"}()',
            tip: 'const a = "b";\n`a${a}c` === "abc";',
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals',
            ver: 'es6'
        },

        {
            title: '<code>includes()</code>',
            test: 'test=function(){return "ab".includes("b");}();',
            tip: '"ab".includes("b")',
            ecma: '',
            mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
            ver: 'es6'
        },

        {
            title: '<code>startsWith()</code>',
            test: 'test=function(){return "ab".startsWith("a");}();',
            tip: '"ab".startsWith("a")',
            ecma: '',
            mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith',
            ver: 'es6'
        },

        {
            title: '<code>endsWith()</code>',
            test: 'test=function(){return "ab".endsWith("b");}();',
            tip: '"ab".endsWith("b");',
            ecma: '',
            mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
            ver: 'es6'
        },

        {
            title: '<code>repeat()</code>',
            test: 'test=function(){return "a".repeat(3)==="aaa";}();',
            tip: '"-".repeat(3)==="---"',
            ecma: '',
            mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
            ver: 'es6'
        },

        {
            title: '<code>codePointAt()</code>',
            test: 'test=function(){return "a𐐷".codePointAt(1)===66615;}();',
            tip: '"𐐷".charCodeAt(0) === 55297;\n"𐐷".codePointAt(0) === 66615;',
            ecma: '',
            ver: 'es6'
        },

        {
            title: '<code>String.fromCodePoint()</code>',
            test: 'test=function(){return String.fromCodePoint(66615)==="𐐷";}();',
            ecma: '',
            ver: 'es6'
        }
    ],

    'Regular Expressions': [

        {
            title: '<code>u</code> flag (unicode)',
            test: function(){
                    var re = new RegExp('.', 'u');
                    return true;
                },
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode',
            ver: 'es6'
        },

        {
            title: '<code>y</code> flag (sticky)',
            test: function(){
                    var re = new RegExp('.', 'y');
                    return true;
                },
            ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky',
            ver: 'es6'
        },

        {
            title: '<code>flags</code> property',
            test: function(){
                var re = /xyz/g;
                return re.flags === 'g';
            },
            tip: 'var re = /xyz/g;\nre.flags === "g";',
            ecma: '',
            ver: 'es6'
        }
    ]
};
