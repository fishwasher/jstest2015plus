
feats['General syntax'] = [

    {
        title: '<code>let</code> and <code>const</code> declarations',
        fid: 'letconst',
        test: 'test=function(){const a=true;let b=true;return a&&b}()',
        tip:  '<b>let</b> x, y = 0;\n<b>const</b> pi = Math.PI;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations',
        ver: 'es6'
    },

    {
        title: 'Spread operator (<code>...</code>)',
        fid: 'sprdop',
        test: 'test=function(){var a=[1,2,3];return Math.min(...a)===1}()',
        tip: 'var numbers = [2, 5, 3, 0, 1];\nvar maxVal = Math.max(<b>...</b>numbers);',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists-runtime-semantics-argumentlistevaluation',
        ver: 'es6'
    },

    {
        title: 'Destructuring declarations, assignment, parameters',
        fid: 'destrct',
        test: 'test=function(){var arr=[1,2,3],obj={a:1,b:2,c:3},[a1,a2,a3,a4]=arr,{a,b,c,d=true}=obj;return a1===a&&a2===b&&a3===c&&!a4&&d}()',
        tip: 'let obj = {a: 1, b: 2, c: 3};\n\n<b>let {a, c, d = "foo"} = obj</b>;\n\nobj = {a: "ah", b: "bee"};\n\n<b>({a, b} = obj)</b>;\n\n<b>let {a: x, b: y} = obj</b>;\n\nlet arr = [1, 2, 3, 5];\n\n<b>let [d, e] = arr</b>;\n\n<b>[, , e, d] = arr</b>;\n\n<b>[d, e] = [e, d]</b>;\n\nfunction func(p1, <b>{p2, p3, p4} = {}</b>) {\n  <i>// do something..</i>\n};',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment',
        ver: 'es6'
    },

    {
        title: 'Object literal syntax extension',
        fid: 'olitxt',
        test: 'test=function(){var prop=true;return{prop}}().prop',
        tip: 'function createPoint(x, y) {\n  return {\n    x,\n    y\n  };\n}',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-object-initialiser',
        ver: 'es6'
    },

    {
        title: 'Rest/Spread Object properties',
        fid: 'osprprp',
        test: 'test=function(){var o={a:false,b:true},oo={...o};return oo.b}()',
        tip: 'const\n  obj1 = {a: "Hello", b: "World"},\n  obj2 = {<b>...obj1</b>, b: "Kitty"};\n\nconsole.log(obj2.a, obj2.b); <i>// "Hello Kitty"</i>',
        ecma: '',
        ver: 'es9'
    },

    {
        title: '<code>for-of</code> loop',
        fid: 'forof',
        test: 'test=function(){var a=[0,1,2,3];for(var v of a){if(v===2){return true}}}()',
        tip: 'let nums = [1, 2, 3];\n\n<b>for</b> (let n <b>of</b> nums) {\n  console.log(n);\n}',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements',
        ver: 'es6'
    },

    {
        title: 'Octal literal <code>0o</code> prefix',
        fid: 'octlit',
        test: 'test=function(){"use strict";return 0o10===8}()',
        tip: 'let num = <b>0o</b>10;\n\nconsole.log(num); <i>// 8</i>',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals',
        ver: 'es6'
    },

    {
        title: '<code>class</code> declaration and expression',
        fid: 'cls',
        test: 'test=function(){class c{constructor(){this.b=true;}}let c2=class{constructor(){this.b=true;}};return new c().b===new c2().b;}();',
        tip: '<b>class</b> Cls {\n  constructor() {\n    this.prop = true;\n  }\n}\n\nlet Kls = <b>class</b> {\n  constructor() {\n    this.prop = true;\n  }\n}',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions',
        ver: 'es6'
    },

    {
      title: 'Exponentiation Operator (<code>**</code>)',
      fid: 'xpop',
      test: 'test=function(){return 2**3===Math.pow(2,3)}()',
      tip: 'var x = 2, y = 3;\n\nconsole.log(x <b>**</b> y === Math.pow(x, y)); <i>// true</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/7.0/#sec-exp-operator',
      ver: 'es7'
    },

    {
      title: 'Asynchronous Iteration',
      fid: 'asiter',
      test: 'test=function(){var v=async function(a) {for await (let i of a) {console.log(i);}};return !!v}()',
      tip: 'async function func(arr) {\n  for await (let i of arr) {\n    console.log(i);\n  }\n}\n',
      ecma: '',
      ver: 'es9'
    }
];
