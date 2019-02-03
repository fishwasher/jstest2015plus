feats['Functions'] = [

  {
      title: 'Arrow function',
      test: 'test=()=>true;',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions',
      tip: 'var doNothing = () => {};\n\nvar isFiveOrLess = num => num <= 5;',
      ver: 'es6'
  },

  {
      title: 'Block-level function declaration',
      test: 'test=function(){"use strict";if(!void 0){function f(){return true}return f()}return false}()',
      tip: '"use strict";\n\nif (true) {\n  <i>// Error in ES5</i>\n  function myFunc() {\n    <i>// ...</i>\n  }\n}\n',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      ver: 'es6'
  },

  {
      title: 'Default function parameter values',
      test: 'test=function(b=true){return b;}()',
      tip: '',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      ver: 'es6'
  },

  {
      title: 'Rest parameters',
      test: 'test=function(...p){return p[0]}(true)',
      tip: 'let nums = [1, 3, 4, 2],\n  maxnum = Math.max(<b>...</b>nums); <i>// 4</i>',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions',
      ver: 'es6'
  },

  {
      title: '<code>new.target</code>',
      test: 'test=function(){function A(){if (!new.target) throw "oops"};try{new A();return true} catch(x){return false}}()',
      tip: 'function MyClass() {\n  if (!<b>new.target</b>) {\n    throw new Error(<i>"this is a constructor, \'new\' is required"</i>);\n  }\n  <i>// ...</i>\n}',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects',
      ver: 'es6'
  },

  {
      title: 'Generator functions',
      test: 'test=function(){var g=function*(){yield 1;},i=g(); return i.next().value;}();',
      tip: 'function *createIterator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generator-function-definitions',
      ver: 'es6'
  },

  {
      title: '<code>async</code> and <code>await</code> keywords',
      test: 'test=function(){var f1=function(){return new Promise(function(res,rej){setTimeout(function(){res("done");}, 3333);});};(async function(){var msg=await f1();console.log(msg);})();return true;};',
      tip: 'async function someAsyncFunc(){\n\tvar result = await somePromiseMakingFunc();\n\t// continue after getting promise resolved\n\tconsole.log(result);\n}',
      ecma: '',
      ver: 'js17'
  }
];
