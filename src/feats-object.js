feats['Object extensions'] = [
  {
      title: 'Property initializer',
      fid: 'oprop',
      test: 'test=function(){var x, f=function(a,b){return {a,b}};x=f(0,1);return x.b}()',
      tip: 'function(propName1, propName2){\n  return {\n    propName1,\n    propName2\n  };\n};',
      ecma: '',
      ver: 'es6'
  },
  {
      title: 'Concise methods',
      fid: 'cmeth',
      test: 'test=function(){var o={m:function(){return 1}};return o.m()}()',
      tip: 'var obj = {\n  prop: <i>"My Property"</i>,\n  printProp() {\n    console.log(this.prop);\n  }\n};',
      ecma: '',
      ver: 'es6'
  },
  {
      title: 'Computed property names',
      fid: 'cpropn',
      test: 'test=function(){var a="b",o={[a]:1};return o.b}()',
      tip: 'var name = <i>"a funky name"</i>;\nvar obj = {\n  [name]: <i>"Hello, World!"</i>\n};\nconsole.log(obj[name]);',
      ecma: '',
      ver: 'es6'
  },
  {
      title: '<code>Object.is()</code>',
      fid: 'ois',
      test: 'test=function(){if (Object.is(1,1)) return 1}()',
      tip: 'console.log(+0 === -0); <i>// true</i>\nconsole.log(Object.is(+0, -0)); <i>// false</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-object.is',
      ver: 'es6'
  },
  {
      title: '<code>Object.assign()</code>',
      fid: 'oass',
      test: 'test=function(){var a={},b={c:1};Object.assign(a,b);return a.c}()',
      tip: 'var obj1 = {};\nvar obj2 = {x: "Hello, World!"};\nObject.assign(obj1, obj2);\nconsole.log(obj1.x); <i>// Hello, World!</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-object.assign',
      ver: 'es6'
  },
  {
      title: 'Duplicate Object literal properties',
      fid: 'duprop',
      test: 'test=function(){"use strict";var o={a:0,a:1};return o.a}()',
      tip: '"use strict";\nvar obj = {\n  prop: <i>"Hello"</i>,\n  prop: <i>"World"</i>\n};\nconsole.log(obj.prop); <i>// "World", no error</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-additions-and-changes-that-introduce-incompatibilities-with-prior-eds',
      ver: 'es6'
  },
  {
      title: 'Own property enumeration order',
      fid: 'propor',
      test: 'test=function(){var o={x:1,2:1,c:1,0:1,b:1,1:1};o.a=1;o.c=2;return Object.getOwnPropertyNames(o).join("")==="012xcba"}()',
      tip: 'var obj = {x: 1, 2: 1, c: 1, 0: 1, b: 1, 1: 1};\nobj.a = 1;\nobj.c = 2;\nconsole.log( Object.getOwnPropertyNames(obj).join("")); <i>// "012xcba"</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-enumerate',
      ver: 'es6'
  },
  {
      title: '<code>Object.setPrototypeOf()</code>',
      fid: 'osetprot',
      test: 'test=function(){const a={f:function(){return 0}},b={f:function(){return 1}},c=Object.create(a);Object.setPrototypeOf(c,b);return c.f()}()',
      tip: 'const\n  protoA = {\n    meth() {\n      return 1;\n    }\n  },\n\n  protoB = {\n    meth() {\n      return 2;\n    }\n  },\n\n  obj = Object.create(protoA);\n\nObject.setPrototypeOf(obj, protoB);\n\nconsole.log(obj.meth()); // 2',
      ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-setprototypeof-v',
      ver: 'es6'
  },
  {
      title: '<code>super</code> reference',
      fid: 'super',
      test: 'test=function(){let a={f(){return 1;}},b={f(){return super.f()+1;}};Object.setPrototypeOf(b,a);return b.f()===2}()',
      tip: 'let obj1 = {\n  f() {\n    return 1;\n  }\n};\nlet obj2 = {\n  f() {\n    return super.f() + 1;\n  }\n};\nObject.setPrototypeOf(obj2, obj1);\nconsole.log(obj2.f()); <i>// 2</i>',
      ecma: '',
      ver: 'es6'
  },

  {
    title: '<code>Object.values()</code>',
    fid: 'ovals',
    test: 'test=function(){var o={prop:true},a=Object.values(o);return a[0]}()',
    tip: 'const obj = {\n  first: 1,\n  second: "two",\n  third: "3"\n},\narr = <b>Object.values</b>(obj); <i>// [1, "two", "3"]</i>',
    ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-object.values',
    ver: 'es8'
  },
  {
    title: '<code>Object.entries()</code>',
    fid: 'oens',
    test: 'test=function(){var o={prop:true},a=Object.entries(o);return a[0][1]}()',
    tip: 'const obj = {\n  first: 1,\n  second: "two",\n  third: "3"\n},\narr = <b>Object.entries</b>(obj); <i>// [["first", 1], ["second", "two"], ["third", "3"]]</i>',
    ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-object.entries',
    ver: 'es8'
  },
  {
    title: '<code>Object.getOwnPropertyDescriptors()</code>',
    fid: 'ogopd',
    test: 'test=function(){var o={prop:true},d=Object.getOwnPropertyDescriptors(o);return d.prop.value}()',
    tip: 'const obj = {\n  prop: 1\n},\ndescr = <b>Object.getOwnPropertyDescriptors</b>(obj);\n\nconsole.log(descr.prop.configurable); <i>// true</i>\nconsole.log(descr.prop.enumerable); <i>// true</i>\nconsole.log(descr.prop.value); <i>// 1</i>\nconsole.log(descr.prop.writable); <i>// true</i>',
    ecma: 'https://www.ecma-international.org/ecma-262/8.0/#sec-object.getownpropertydescriptors',
    ver: 'es8'
  }
];
