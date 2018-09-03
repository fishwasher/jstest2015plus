// http://kangax.github.io/compat-table/es6/
//window.ES2015 || (window.ES2015 = {});

!function(win, doc){
  var
    targEl = doc.getElementById('test-result'),

    testS = function(s) {
      var test = false;
      try {
        eval(s);
      } catch (x) {}
      return test;
    },

    testF = function(f) {
      try {
        return !!f();
      } catch (x) {
        return false;
      }
    },

    renderGroup = function(title, testlist) {
      var hd = doc.createElement('h2');
      hd.innerText = title;
      targEl.appendChild(hd);
      testlist.forEach(function(row) {
        var
          res = typeof row[1] === 'string' ? testS(row[1]) : testF(row[1]),
          rowEl = doc.createElement('div'),
          featTag = row[2] ? 'a' : 'span',
          featEl = doc.createElement(featTag),
          resEl = doc.createElement('span');
        featEl.innerHTML = row[0];
        featEl.className = 'descr';
        if (row[2]) {
          featEl.setAttribute('href', row[2]);
          featEl.setAttribute('target','_blank');
        }
        resEl.innerText = res ? 'Y' : 'N';
        resEl.className = 'result ' + (res ? 'yes' : 'no');
        rowEl.className = 'row';
        rowEl.appendChild(featEl);
        rowEl.appendChild(resEl);
        targEl.appendChild(rowEl);
      });
    },

    runTest = function() {
      renderGroup('Syntax', [
        ['<code>let</code> and <code>const</code> declarations', 'test=function(){const a=true;let b=true;return a&&b}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations'],
        ['Block-level function declaration', 'test=function(){"use strict";if(!void 0){function f(){return true}return f()}return false}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation'],
        ['Default function parameter values', 'test=function(b=true){return b;}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarationinstantiation'],
        ['Rest parameters', 'test=function(...p){return p[0]}(true)', 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions'],
        ['Spread operator', 'test=function(){var a=[1,2,3];return Math.min(...a)===1}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists-runtime-semantics-argumentlistevaluation'],
        ['Destructuring declarations, assignment, parameters', 'test=function(){var arr=[1,2,3],obj={a:1, b:2, c:3},[a1,a2,a3,a4]=arr,{a,b,c,d=true}=obj;return a1===a&&a2===b&&a3===c&&!a4&&d}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-destructuring-assignment'],
        ['Object literal syntax extension', 'test=function(){var prop=true;return{prop}}().prop', 'http://www.ecma-international.org/ecma-262/6.0/#sec-object-initialiser'],
        ['<code>for-of</code> loop', 'test=function(){var a=[0,1,2,3];for(var v of a){if(v===2){return true}}}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-for-in-and-for-of-statements'],
        ['Octal literal <code>0o</code> prefix', 'test=function(){"use strict";return 0o10===8}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-literals-numeric-literals'],
        ['Template literals', 'test=function(){"use strict";var a=String.fromCharCode(98);return `a${a}c`==="abc"}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals'],
        ['RegExp <code>u</code> flag (unicode)', function(){var re=new RegExp('.','u');return true;}, 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode'],
        ['RegExp <code>y</code> flag (sticky)', function(){var re=new RegExp('.','y');return true;}, 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky'],
        ['<code>new.target</code>', 'test=function(){function A(){if (!new.target) throw "oops"};try{new A();return true} catch(x){return false}}()', 'http://www.ecma-international.org/ecma-262/6.0/#sec-built-in-function-objects']
      ]);
      renderGroup('Built-ins', [
        ['Arrow functions', 'test=()=>true;', 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions'],
        ['<code>class</code>', 'test=function(){class c{constructor(){this.b=true;}}return new c().b;}();', 'http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions'],
        ['Generators', 'test=function(){var g=function*(){yield 1;},i=g(); return i.next().value;}();', 'http://www.ecma-international.org/ecma-262/6.0/#sec-generator-function-definitions'],
        ['<code>Map</code>', 'test=function(){var m=new Map();m.set(1, true);return m.get(1);}();', 'http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects'],
        ['<code>Promise</code>', function(){return typeof Promise==='function' && typeof Promise.resolve==='function';}, 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects'],
        ['<code>Symbol</code>', function(){return typeof Symbol==='function' && typeof Symbol()==='symbol'}, 'http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor']
      ]);
    };

  win.onerror = function(){};
  win.addEventListener('load', runTest);
}(window, document);
