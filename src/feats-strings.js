feats['Strings'] = [

    {
        title: 'Template literals',
        test: 'test=function(){"use strict";var a=String.fromCharCode(98);return `a${a}c`==="abc"}()',
        tip: 'const a = "b";\n`a${a}c` === "abc";',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-template-literals',
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
];
