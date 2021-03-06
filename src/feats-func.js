feats['New function syntax and features'] = [

  {
      title: 'Arrow function',
      fid: 'arfn',
      test: 'test=()=>true;',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions',
      tip: 'var doNothing = () => {};\n\nvar isFiveOrLess = num => num <= 5;',
      ver: 'es6'
  },

  {
      title: 'Block-level function declaration',
      fid: 'blkfn',
      test: 'test=function(){"use strict";if(!void 0){function f(){return true}return f()}return false}()',
      tip: '"use strict";\n\nif (true) {\n  <i>// Error in ES5</i>\n  function myFunc() {\n    <i>// ...</i>\n  }\n}\n',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      ver: 'es6'
  },

  {
      title: 'Default function parameter values',
      fid: 'dfprm',
      test: 'test=function(b=true){return b;}()',
      tip: 'function func(x, y, <b>z = 1</b>) {\n  <i>// do something</i>\n}\n',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      ver: 'es6'
  },

  {
      title: 'Rest parameters',
      fid: 'restp',
      test: 'test=function(...p){return p[0]}(true)',
      tip: 'let nums = [1, 3, 4, 2],\n  maxnum = Math.max(<b>...</b>nums); <i>// 4</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions',
      ver: 'es6'
  },

  {
      title: '<code>new.target</code>',
      fid: 'newtgt',
      test: 'test=function(){function A(){if (!new.target) throw "oops"};try{new A();return true} catch(x){return false}}()',
      tip: 'function MyClass() {\n  if (!<b>new.target</b>) {\n    throw new Error(<i>"this is a constructor, \'new\' is required"</i>);\n  }\n  <i>// ...</i>\n}',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects',
      ver: 'es6'
  },

  {
      title: 'Generator functions',
      fid: 'genf',
      test: 'test=function(){var g=function*(){yield 1;},i=g(); return i.next().value;}();',
      tip: 'function *createIterator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-generator-function-definitions',
      ver: 'es6'
  },

  {
      title: '<code>async</code> and <code>await</code> keywords',
      fid: 'async',
      test: 'test=function(){var f1=function(){return new Promise(function(res,rej){setTimeout(function(){res("done");}, 3333);});};(async function(){var msg=await f1();console.log(msg);})();return true;};',
      tip: '<b>async</b> function someAsyncFunc(){\n  var result = <b>await</b> somePromiseMakingFunc();\n  <i>// continue after getting promise resolved</i>\n  console.log(result);\n}',
      ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-async-function-definitions',
      ver: 'es8'
  },

  {
    title: 'Trailing comma in parameter list',
    fid: 'trlcom',
    test: 'test=function(a, b,){return b}(0, 1,)',
    tip: 'function func(x, y<b>,</b>) {\n  <i>// do something</i>\n}\n',
    ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-function-definitions',
    ver: 'es8'
  }
];
