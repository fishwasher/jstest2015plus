
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
      elX.innerHTML = '✖';
      elX.addEventListener('click', function() {
        modal.hide();
      });
      elOvl.appendChild(elX);
      elMod.appendChild(elOvl);
      document.body.appendChild(elMod);
    };

    var renderItem = function(feat, parent) {
      if (!parent || !feat || !feat.title || !feat.test) {
        return;
      }
      var
        testVal = runTest(feat.test),
        itemEl = makeEl('li', 'feature ' + (testVal ? 'pass' : 'fail')),
        rowEl = makeEl('span', 'row'),
        testEl = makeEl('span', 'checkmark'),
        descrEl = makeEl('span', 'descr'),
        infoHtml;

      descrEl.innerHTML = feat.title;
      rowEl.appendChild(testEl);
      rowEl.appendChild(descrEl);
      itemEl.appendChild(rowEl);
      infoHtml = '<h3>' + feat.title + '</h3>\n';
      if (feat.ver && editions[feat.ver]) {
        infoHtml += '<p class="version">' + editions[feat.ver] + '</p>\n';
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
        for (var sectTitle in feats) {
            var
                sectEl = makeEl('div'),
                titleEl = makeEl('h2'),
                featsEl = makeEl('ul'),
                featList = feats[sectTitle];

            sectEl.className = 'section';
            titleEl.innerHTML = sectTitle;
            sectEl.appendChild(titleEl);
            featsEl.className = 'features';

            for (var i = 0, n = featList.length; i < n; i++) {
                 renderItem(featList[i], featsEl);
                //featsEl.appendChild(itemEl);
            }
            sectEl.appendChild(featsEl);
            targEl.appendChild(sectEl);
        }
    };

    var renderUA = function() {
      document.getElementById('ua-target').innerHTML = navigator.userAgent;
    };

    window.addEventListener('load', function(){
      renderUA();
      createModal();
      runtest('test-target');
    });
