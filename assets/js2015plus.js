!function(win, doc){
    
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

    var features = {
        'New Syntax': [
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

        'Built-ins': [
            {
                title: 'Arrow function',
                test: 'test=()=>true;',
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions',
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

        'Strings and Regular Expressions': [
            {
                title: 'Template literals',
                test: 'test=function(){"use strict";var a=String.fromCharCode(98);return `a${a}c`==="abc"}()',
                ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-template-literals',
                ver: 'es6'
            },

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
        ],

        'Functions': [
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
                title: '',
                test: '',
                ecma: '',
                ver: 'es6'
            },

            {
                title: '',
                test: '',
                ecma: '',
                ver: 'es6'
            },
        ]
    };
}