feats['Functions'] = [

  {
      title: 'Arrow function',
      test: 'test=()=>true;',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions',
      ver: 'es6'
  },

  {
      title: 'Block-level function declaration',
      test: 'test=function(){"use strict";if(!void 0){function f(){return true}return f()}return false}()',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      ver: 'es6'
  },

  {
      title: 'Default function parameter values',
      test: 'test=function(b=true){return b;}()',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation',
      ver: 'es6'
  },

  {
      title: 'Rest parameters',
      test: 'test=function(...p){return p[0]}(true)',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions',
      ver: 'es6'
  },

  {
      title: '<code>new.target</code>',
      test: 'test=function(){function A(){if (!new.target) throw "oops"};try{new A();return true} catch(x){return false}}()',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects',
      ver: 'es6'
  },

  {
      title: 'Generator functions',
      test: 'test=function(){var g=function*(){yield 1;},i=g(); return i.next().value;}();',
      ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generator-function-definitions',
      ver: 'es6'
  },

  {
      title: '<code>async</code> and <code>await</code> keywords',
      test: 'test=function(){var f1=function(){return new Promise(function(res,rej){setTimeout(function(){res("done");}, 3333);});};(async function(){var msg=await f1();console.log(msg);})();return true;};',
      tip: 'async function someAsyncFunc(){\n\tvar result = await somePromiseMakingFunc();\n\t// continue after getting promise resolved\n\tconsole.log(result);\n}',
      ecma: '',
      ver: 'js17'
  },

  {
      title: '',
      test: '',
      ecma: '',
      ver: 'es6'
  },
];
