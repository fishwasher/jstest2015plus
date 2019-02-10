feats['Regular Expressions'] = [

    {
        title: '<code>u</code> flag (unicode)',
        test: function(){
                var re = new RegExp('.', 'u');
                return true;
            },
        tip: 'var unicodePattern = /[\s\S]/g<b>u</b>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode',
        ver: 'es6'
    },

    {
        title: '<code>y</code> flag (sticky)',
        test: function(){
                var re = new RegExp('.', 'y');
                return true;
            },
        tip: 'var stickyPattern = /abc/<b>y</b>;',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky',
        ver: 'es6'
    },

    {
        title: '<code>flags</code> property',
        test: function(){
            var re = /xyz/g;
            return re.flags === 'g';
        },
        tip: 'var re = /xyz/g;\nre.flags === "g";',
        ecma: 'https://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.flags',
        ver: 'es6'
    }
];
