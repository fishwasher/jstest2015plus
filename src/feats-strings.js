feats['Strings'] = [

    {
        title: 'Template literals',
        fid: 'tplit',
        test: 'test=function(){"use strict";var a=String.fromCharCode(98);return `a${a}c`==="abc"}()',
        tip: 'var a = <em>"b"</em>;\n\n`a${a}c` === <em>"abc"</em>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-template-literals',
        ver: 'es6'
    },

    {
        title: '<code>String.prototype.includes()</code>',
        fid: 'spinc',
        test: 'test=function(){return "ab".includes("b");}();',
        tip: '<em>"ab"</em>.includes(<em>"b"</em>) === true;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.includes',
        ver: 'es6'
    },

    {
        title: '<code>String.prototype.startsWith()</code>',
        fid: 'spstw',
        test: 'test=function(){return "ab".startsWith("a");}();',
        tip: '<em>"ab"</em>.startsWith(<em>"a"</em>) === true;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.startswith',
        ver: 'es6'
    },

    {
        title: '<code>String.prototype.endsWith()</code>',
        fid: 'spendw',
        test: 'test=function(){return "ab".endsWith("b");}();',
        tip: '<em>"ab"</em>.endsWith(<em>"b"</em>) === true;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.endswith',
        ver: 'es6'
    },

    {
        title: '<code>String.prototype.repeat()</code>',
        fid: 'sprpt',
        test: 'test=function(){return "a".repeat(3)==="aaa";}();',
        tip: '<em>"-"</em>.repeat(3) === <em>"---"</em>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.repeat',
        ver: 'es6'
    },

    {
        title: '<code>String.prototype.codePointAt()</code>',
        fid: 'spcptat',
        test: 'test=function(){return "a𐐷".codePointAt(1)===66615;}();',
        tip: '<em>"𐐷"</em>.charCodeAt(0) === 55297;\n\n<em>"𐐷"</em>.<b>codePointAt</b>(0) === 66615;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.codepointat',
        ver: 'es6'
    },

    {
        title: '<code>String.fromCodePoint()</code>',
        fid: 'sfrcp',
        test: 'test=function(){return String.fromCodePoint(66615)==="𐐷";}();',
        tip: 'String.<b>fromCodePoint</b>(66615) === <em>"𐐷"</em>;\n',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-string.fromcodepoint',
        ver: 'es6'
    },

    {
        title: '<code>String.prototype.padStart()</code>',
        fid: 'sppads',
        test: 'test=function(){return "1".padStart(3)==="  1";}();',
        tip: '<em>"abc"</em>.padStart(5) === <em>"  abc"</em>;\n\n<em>"abc"</em>.padStart(5, <em>"-"</em>) === <em>"--abc"</em>;\n\n<em>"7"</em>.padStart(3, 0) === <em>"007"</em>;\n',
        ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-string.prototype.padstart',
        ver: 'es8'
    },

    {
        title: '<code>String.prototype.padEnd()</code>',
        fid: 'sppade',
        test: 'test=function(){return "1".padEnd(3,0)==="100";}();',
        tip: '<em>"abc"</em>.padEnd(5) === <em>"abc  "</em>;\n\n<em>"abc"</em>.padEnd(5, <em>"_"</em>) === <em>"abc__"</em>;\n\n<em>"1"</em>.padEnd(3, 0) === <em>"100"</em>;\n',
        ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-string.prototype.padend',
        ver: 'es8'
    }
];
