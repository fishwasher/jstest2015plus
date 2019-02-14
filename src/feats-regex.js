feats['Regular Expressions'] = [

    {
        title: 'RegExp <code>u</code> flag (unicode)',
        fid: 'reuf',
        test: function(){
                var re = new RegExp('.', 'u');
                return true;
            },
        tip: 'var unicodePattern = <em>/[\s\S]/g</em><b>u</b>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode',
        ver: 'es6'
    },

    {
        title: 'RegExp <code>y</code> flag (sticky)',
        fid: 'reyf',
        test: function(){
                var re = new RegExp('.', 'y');
                return true;
            },
        tip: 'var stickyPattern = <em>/abc/</em><b>y</b>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky',
        ver: 'es6'
    },

    {
        title: 'RegExp <code>s</code> flag (dotAll)',
        fid: 'resf',
        test: function(){
                var re = new RegExp('.', 's');
                return true;
            },
        tip: 'var re = <em>/.+/</em><b>s</b>,\n  match = re.exec(<em>"ab\\ncd"</em>);\n\nconsole.log(match[0]); <i>//"ab↵cd"</i>',
        ecma: '',
        ver: 'es9'
    },

    {
        title: 'RegExp <code>flags</code> property',
        fid: 'refl',
        test: function(){
            var re = /xyz/g;
            return re.flags === 'g';
        },
        tip: 'var re = <em>/xyz/g</em>;\nre.flags === <em>"g"</em>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.flags',
        ver: 'es6'
    },

    {
      title: 'Named capture groups',
      fid: 'rencg',
      test: 'test=function(){var re=/(?<num>\\d+)/,m=re.exec("ab123cd");return m.groups.num==="123"}()',
      tip: 'var re = <em>/(?&lt;year&gt;[0-9]{4})-(?&lt;month&gt;[0-9]{2})-(?&lt;day&gt;[0-9]{2})/</em>,\n  match = re.exec(<em>"updated 2019-02-12</em>");\n\nconsole.log(match.groups.year); <i>// 2019</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/9.0/#sec-patterns',
      ver: 'es9'
    },

    {
      title: 'Positive <i>lookbehind</i> assertions',
      fid: 'relb',
      test: 'test=function(){var re=/(?<=\\D)\\d+/,m=re.exec("$123");return m[0]==="123"}()',
      tip: 'var re = <em>/(?&lt;=\\D)\\d+/</em>,\n  match = re.exec(<em>"$100"</em>);\n\nconsole.log(match[0]); <i>// 100</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/9.0/#sec-patterns',
      ver: 'es9'
    },

    {
      title: 'Negative <i>lookbehind</i> assertions',
      fid: 'renlb',
      test: 'test=function(){var re=/(?<!\\D)\\d+/,m=re.exec("$1.23");return m[0]==="3"}()',
      tip: 'var re = <em>/(?&lt;!\\D)\\d+/</em>,\n  match = re.exec(<em>"$1.23"</em>);\n\nconsole.log(match[0]); <i>// 3</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/9.0/#sec-patterns',
      ver: 'es9'
    },

    {
      title: 'Unicode property escapes',
      fid: 'reucesc',
      test: 'test=function(){var re=/\\p{Script=Greek}/u;return re.test("π");}()',
      tip: 'var re = <em>/\\p{Script=Greek}/u</em>;\n\nconsole.log(re.test(<em>"π"</em>)); <i>// true</i>',
      ecma: 'https://www.ecma-international.org/ecma-262/9.0/#sec-patterns',
      ver: 'es9'
    }
];
