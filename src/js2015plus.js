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
                tip: 'const a = "b"; `a${a}c` === "abc";',
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
                tip: '"ab".endsWith("b");'
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
                tip: '"𐐷".charCodeAt(0) === 55297; "𐐷".codePointAt(0) === 66615;',
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
                    const re = /xyz/g;
                    return re.flags === 'g';
                },
                tip: 'const re = /xyz/g; re.flags === "g";',
                ecma: '',
                ver: 'es6'
            }
        ]
    };

    var runTest = function(p) {
        var t = typeof(p);
        if ('function' === t) {
            try {
                return !!p();
            } catch(x) {}
            return false;
        }
        if ('string' === t) {
            var test = false;
            try {
                eval(s);
            } catch (x) {}
            return test;
        }
    };

    var versionMap = {
        es6: 'ECMAScript 6',
        js16: 'JavaScript 2016',
        js17: 'JavaScript 2017'
    };

    var withText = function(el, txt) {
        if (txt) {
            var tn = document.createTextNode(txt);
            el.appendChild(tn);
        }
        return el;
    };

    var makeEl = function(tagname, classname, txt) {
        var el = document.createElement(tagname);
        if (classname) {
            el.className = classname;
        }
        return withText(el);
    };

    var makeTextLink = function(href, txt, classname, targetBlank) {
        var a = makeEl('a', classname, txt);
        a.setAttribute('href', href);
        if (targetBlank || targetBlank === undefined) {
            a.setAttribute('target', '_blank');
            a.setAttribute('noopener', '');
            a.setAttribute('noreferrer', '');
        }
        return a;
    };

    // Create tooltip (from example #1 at https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove)
    var oTooltip = new (function() {
        var nOverX, nOverY, nLeftPos, nTopPos, oNode, bOff = true;
        
        this.follow = function (oMsEvnt1) {
            if (bOff) {
                return;
            }
            var nMoveX =  oMsEvnt1.clientX, nMoveY =  oMsEvnt1.clientY;
            nLeftPos += nMoveX - nOverX; nTopPos += nMoveY - nOverY;
            oNode.style.left = nLeftPos + "px";
            oNode.style.top = nTopPos + "px";
            nOverX = nMoveX; nOverY = nMoveY;
        };
        this.remove = function () {
            if (bOff) {
                return;
            }
            bOff = true;
            document.body.removeChild(oNode);
        };
        
        this.append = function (oMsEvnt2, sTxtContent) {
            oNode.innerHTML = sTxtContent;
            if (bOff) {
                document.body.appendChild(oNode);
                bOff = false;
            }
            var nScrollX = document.documentElement.scrollLeft || document.body.scrollLeft,
                nScrollY = document.documentElement.scrollTop || document.body.scrollTop,
                nWidth = oNode.offsetWidth,
                nHeight = oNode.offsetHeight;
            nOverX = oMsEvnt2.clientX;
            nOverY = oMsEvnt2.clientY;
            nLeftPos = document.body.offsetWidth - nOverX - nScrollX > nWidth ? nOverX + nScrollX + 10 : document.body.offsetWidth - nWidth + 16;
            nTopPos = nOverY - nHeight > 6 ? nOverY + nScrollY - nHeight - 7 : nOverY + nScrollY + 20;
            oNode.style.left = nLeftPos + "px";
            oNode.style.top = nTopPos + "px";
        };
        
        this.init = function() {
            oNode = document.createElement("div");
            oNode.className = "tooltip";
            oNode.style.position = "absolute";
        };
    })();
    
    // Add tooltip to an element
    var addTooltip = function(el, content) {
        el.addEventListener('mouseover', function(event){
            oTooltip.append(event, content);
        });
        el.addEventListener('mousemove', function(event){
            oTooltip.follow(event);
        });
        el.addEventListener('mouseout', function(event){
            oTooltip.remove(event);
        });
    };

    // render tests
    (function(targId) {
        var targEl = document.getElementById(targId);
        targEl.innerHtml = '';
        for (var sectTitle in features) {
            var
                sectEl = makeEl('div'),
                sectEl.className = 'section';
                titleEl = makeEl('h2'),
                featsEl = makeEl('ul'),
                featList = features[sectTitle];
            titleEl.innerHTML = sectTitle;
            sectEl.appendChild(titleEl);
            for (var i = 0, n = featList.length; i < n; i++) {
                var feat = featList[i], testVal, descrEl, testEl, mdnEl, ecmaEl, verEl, itemEl, subEl, tipEl;
                if (!feat.title || !feat.test) {
                    continue;
                }
                testVal = runTest(feat.test);
                itemEl = makeEl('li', 'feature ' + (testVal ? 'pass' : 'fail'));
                testEl = makeEl('span', 'checkmark');
                descrEl = makeEl('span', 'descr');
                descrEl.innerHTML = feat.title;
                itemEl.appendChild(testEl);
                itemEl.appendChild(descrEl);
                subEl = makeEl('div', 'subline');
                if (feat.ver && versionMap[feat.ver]) {
                    verEl = makeEl('span', 'version', versionMap[feat.ver]);
                    subEl.appendChild(verEl);
                }
                if (feat.ecma) {
                    ecmaEl = makeTextLink(feat.ecma, 'ECMA', 'ecma');
                    subEl.appendChild(ecmaEl);
                }
                if (feat.mdn) {
                    mdnEl = makeTextLink(feat.mdn, 'MDN', 'mdn');
                    subEl.appendChild(mdnEl);
                }
                itemEl.appendChild(subEl);
                if (feat.tip) {
                    addTooltip(itemEl, feat.tip);
                }
            }
            featsEl.appendChild(itemEl);
            sectEl.appendChild(featsEl);
            targEl.appendChild(sectEl);
        }
    })('test-target');
    
    window.addEventListener('load', function(){
        oTooltip.init();
    });
}();