!function(){

    var features = {

        'Syntax': [

            {
                title: '<code>let</code> and <code>const</code> declarations',
                test: 'test=function(){const a=true;let b=true;return a&&b}()',
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

        'Functions': [

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
                title: 'Asynchronous function syntax with <code>async</code> and <code>await</code> keywords',
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
        ],

        'Built-in objects': [

            {
                title: '<code>Set</code>',
                test: 'test=function(){var s=new Set();s.add(1);s.add("1");s.add("1");s.add({});s.add({});return s.size===4;}();',
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects',
                ver: 'es6'
            },

            {
                title: '<code>Map</code>',
                test: 'test=function(){var m=new Map();m.set(1, true);return m.get(1);}();',
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-map-objects',
                ver: 'es6'
            },

            {
                title: '<code>Promise</code>',
                test: function(){
                        return typeof Promise === 'function' && typeof Promise.resolve === 'function';
                    },
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects',
                ver: 'es6'
            },

            {
                title: '<code>Symbol</code>',
                test: function(){
                        return typeof Symbol==='function' && typeof Symbol() === 'symbol';
                    },
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-constructor',
                ver: 'es6'
            },

            {
                title: '',
                test: '',
                ecma: '',
                ver: 'es6'
            },
        ],

        'Strings': [

            {
                title: 'Template literals',
                test: 'test=function(){"use strict";var a=String.fromCharCode(98);return `a${a}c`==="abc"}()',
                tip: 'const a = "b";\n`a${a}c` === "abc";',
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals',
                ver: 'es6'
            },

            {
                title: 'String prototype <code>includes</code> method',
                test: 'test=function(){return "ab".includes("b");}();',
                tip: '"ab".includes("b")',
                ecma: '',
                mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
                ver: 'es6'
            },

            {
                title: 'String prototype <code>startsWith</code> method',
                test: 'test=function(){return "ab".startsWith("a");}();',
                tip: '"ab".startsWith("a")',
                ecma: '',
                mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith',
                ver: 'es6'
            },

            {
                title: 'String prototype <code>endsWith</code> method',
                test: 'test=function(){return "ab".endsWith("b");}();',
                tip: '"ab".endsWith("b");',
                ecma: '',
                mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
                ver: 'es6'
            },

            {
                title: 'String prototype <code>repeat</code> method',
                test: 'test=function(){return "a".repeat(3)==="aaa";}();',
                tip: '"-".repeat(3)==="---"',
                ecma: '',
                mdn: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith',
                ver: 'es6'
            },

            {
                title: 'String prototype <code>codePointAt</code> method',
                test: 'test=function(){return "a𐐷".codePointAt(1)===66615;}();',
                tip: '"𐐷".charCodeAt(0) === 55297;\n"𐐷".codePointAt(0) === 66615;',
                ecma: '',
                ver: 'es6'
            },

            {
                title: 'String <code>fromCodePoint</code> method',
                test: 'test=function(){return String.fromCodePoint(66615)==="𐐷";}();',
                ecma: '',
                ver: 'es6'
            }
        ],

        'Regular Expressions': [

            {
                title: 'RegExp <code>u</code> flag (unicode)',
                test: function(){
                        var re = new RegExp('.', 'u');
                        return true;
                    },
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode',
                ver: 'es6'
            },

            {
                title: 'RegExp <code>y</code> flag (sticky)',
                test: function(){
                        var re = new RegExp('.', 'y');
                        return true;
                    },
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky',
                ver: 'es6'
            },

            {
                title: 'RegExp prototype <code>flags</code> property',
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

    var runTest = function(p) {
        var t = typeof(p), ret = false;
        if ('string' === t) {
            try {
                var test = false;
                eval(p);
                return !!test;
            } catch (x) {}
        }
        else if ('function' === t) {
            try {
                ret = !!p();
            } catch(x) {}
        }
        return ret;
    };

    var versionMap = {
        es6: 'ECMAScript 6',
        js16: 'JavaScript 2016',
        js17: 'JavaScript 2017'
    };

    var makeEl = function(tagname, classname, txt) {
        var el = document.createElement(tagname);
        if (classname) {
            el.className = classname;
        }
        if (txt && txt !== 0) {
          var tn = document.createTextNode(txt + '');
          el.appendChild(tn);
        }
        return el;
    };

    var modal = null;

    var createModal = function() {
      if (modal) return;
      var
        elMod = makeEl('div', 'modal-wrap'), elOvl = makeEl('div', 'modal-overlay'),
        elX = makeEl('div', 'modal-close'),
        elInner = null;

      modal = {
        show: function(content) {
          if (content !== null && content !== undefined) {
            /*
            if (elInner) {
              elInner.parentElement.removeChild(elInner);
            }
            */
            elInner = makeEl('div', 'modal-inner');
            elInner.innerHTML = content;
            elOvl.appendChild(elInner);
          }
          elMod.style.display = 'block';
        },
        hide: function() {
          elInner.parentElement.removeChild(elInner);
          elMod.style.display = 'none';
        }
      }
      elX.innerHTML = '&times;'
      elX.addEventListener('click', function() {
        modal.hide();
      });
      elOvl.appendChild(elX);
      elMod.appendChild(elOvl);
      document.body.appendChild(elMod);
    };

    var renderItem = function(feat, parent) {
      var testVal, descrEl, testEl, infoHtml;
      if (!parent || !feat || !feat.title || !feat.test) {
          return;
      }
      testVal = runTest(feat.test);
      itemEl = makeEl('li', 'feature ' + (testVal ? 'pass' : 'fail'));
      testEl = makeEl('span', 'checkmark');
      descrEl = makeEl('span', 'descr');
      descrEl.innerHTML = feat.title;
      itemEl.appendChild(testEl);
      itemEl.appendChild(descrEl);
      infoHtml = '<h3>' + feat.title + '</h3>\n';
      if (feat.ver && versionMap[feat.ver]) {
        infoHtml += '<p class="version">' + versionMap[feat.ver] + '</p>\n';
      }
      if (feat.ecma || feat.mdn) {
        infoHtml += '<div class="reflinks">\n';
        if (feat.ecma) {
          infoHtml += '<a class="ecma" href="' + feat.ecma + '">ECMA</a>\n';
        }
        if (feat.mdn) {
          infoHtml += '<a class="mdn" href="' + feat.mdn + '">MDN</a>\n';
        }
        infoHtml += '</div>';
      }
      if (feat.tip) {
          infoHtml += '<h3>Example</h3>\n<pre>\n' + feat.tip + '\n</pre>';
      }
      if (infoHtml.length) {
        itemEl.addEventListener('click', function(){
          modal.show(infoHtml);
        });
      }
      parent.appendChild(itemEl);
    };


    // render tests
    var runtest = function(targId) {
        var targEl = document.getElementById(targId);
        targEl.innerHtml = '';
        for (var sectTitle in features) {
            var
                sectEl = makeEl('div'),
                titleEl = makeEl('h2'),
                featsEl = makeEl('ul'),
                featList = features[sectTitle];

            sectEl.className = 'section';
            titleEl.innerHTML = sectTitle;
            sectEl.appendChild(titleEl);
            featsEl.className = 'features';

            for (var i = 0, n = featList.length; i < n; i++) {
                renderItem(featList[i], featsEl);
                featsEl.appendChild(itemEl);
            }
            sectEl.appendChild(featsEl);
            targEl.appendChild(sectEl);
        }
    };

    window.addEventListener('load', function(){
        createModal();
        runtest('test-target');
    });
}();
