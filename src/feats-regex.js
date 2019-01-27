feats['Regular Expressions'] = [

    {
        title: '<code>u</code> flag (unicode)',
        test: function(){
                var re = new RegExp('.', 'u');
                return true;
            },
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.unicode',
        ver: 'es6'
    },

    {
        title: '<code>y</code> flag (sticky)',
        test: function(){
                var re = new RegExp('.', 'y');
                return true;
            },
        ecma: 'http://www.ecma-international.org/ecma-262/6.0/#sec-get-regexp.prototype.sticky',
        ver: 'es6'
    },

    {
        title: '<code>flags</code> property',
        test: function(){
            var re = /xyz/g;
            return re.flags === 'g';
        },
        tip: 'var re = /xyz/g;\nre.flags === "g";',
        ecma: '',
        ver: 'es6'
    }
];
