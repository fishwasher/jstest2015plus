
feats['Syntax'] = [

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
        tip: 'var numbers = [2, 5, 3, 0, 1];\nvar maxVal = Math.max(<b>...</b>numbers);',
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists-runtime-semantics-argumentlistevaluation',
        ver: 'es6'
    },

    {
        title: 'Destructuring declarations, assignment, parameters',
        test: 'test=function(){var arr=[1,2,3],obj={a:1, b:2, c:3},[a1,a2,a3,a4]=arr,{a,b,c,d=true}=obj;return a1===a&&a2===b&&a3===c&&!a4&&d}()',
        tip: 'let obj = {a: 1, b: 2, c: 3};\n\n<b>let {a, c, d = "foo"} = obj</b>;\n\nobj = {a: "ah", b: "bee"};\n\n<b>({a, b} = obj)</b>;\n\n<b>let {a: x, b: y} = obj</b>;\n\nlet arr = [1, 2, 3, 5];\n\n<b>let [d, e] = arr</b>;\n\n<b>[, , e, d] = arr</b>;\n\n<b>[d, e] = [e, d]</b>;\n\nfunction func(p1, <b>{p2, p3, p4} = {}</b>) {\n  <i>// do something..</i>\n};',
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
    {
        title: '',
        test: 'test=function(){}()',
        ver: 'es6'
    }
];
