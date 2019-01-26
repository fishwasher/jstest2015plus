feats['Object Extensions'] = [
  {
      title: 'Property Initializer',
      test: 'test=function(){var x, f=function(a,b){return {a,b}};x=f(0,1);return x.b}()',
      tip: 'function(propName1, propName2){\n  return {\n    propName1,\n    propName2\n  };\n};',
      ver: 'es6'
  },
  {
      title: 'Concise Methods',
      test: 'test=function(){var o={m:function(){return 1}};return o.m()}()',
      tip: 'var obj = {\n  prop: "My Property",\n  printProp() {\n    console.log(this.prop);\n  }\n};',
      ver: 'es6'
  },
  {
      title: 'Computed Property Names',
      test: 'test=function(){var a="b",o={[a]:1};return o.b}()',
      tip: 'var name = "a funky name";\nvar obj = {\n  [name]: "Hello, World!"\n};\nconsole.log(obj[name]);',
      ver: 'es6'
  },
  {
      title: '<code>Object.is()</code>',
      test: 'test=function(){if (Object.is(1,1)) return 1}()',
      tip: 'console.log(+0 === -0); // true\nconsole.log(Object.is(+0, -0)); // false',
      ver: 'es6'
  },
  {
      title: '<code>Object.assign()</code>',
      test: 'test=function(){var a={},b={c:1};Object.assign(a,b);return a.c}()',
      tip: 'var obj1 = {};\nvar obj2 = {x: "Hello, World!"};\nObject.assign(obj1, obj2);\nconsole.log(obj1.x); // Hello, World!',
      ver: 'es6'
  },
  {
      title: 'Duplicate Object Literal Properties',
      test: 'test=function(){"use strict";var o={a:0,a:1};return o.a}()',
      tip: '"use strict";\nvar obj = {\n  prop: "Hello",\n  prop: "World"\n};\nconsole.log(obj.prop); // "World", no error',
      ver: 'es6'
  },
  {
      title: 'Own Property Enumeration Order',
      test: 'test=function(){var o={x:1,2:1,c:1,0:1,b:1,1:1};o.a=1;o.c=2;return Object.getOwnPropertyNames(o).join("")==="012xcba"}()',
      tip: 'var obj = {x: 1, 2: 1, c: 1, 0: 1, b: 1, 1: 1};\nobj.a = 1;\nobj.c = 2;\nconsole.log( Object.getOwnPropertyNames(obj).join("")); // "012xcba"',
      ver: 'es6'
  },
  {
      title: '<code>Object.setPrototypeOf()</code>',
      test: 'test=function(){const a={f:function(){return 0}},b={f:function(){return 1}},c=Object.create(a);Object.setPrototypeOf(c,b);return c.f()}()',
      tip: 'const\n  protoA = {\n    meth() {\n      return 1;\n    }\n  },\n\n  protoB = {\n    meth() {\n      return 2;\n    }\n  },\n\n  obj = Object.create(protoA);\n\nObject.setPrototypeOf(obj, protoB);\n\nconsole.log(obj.meth()); // 2',
      ver: 'es6'
  },
  {
      title: '',
      test: 'test=function(){}()',
      ver: 'es6'
  },
  {
      title: '',
      test: 'test=function(){}()',
      ver: 'es6'
  },
  {
      title: '',
      test: 'test=function(){}()',
      ver: 'es6'
  }
];