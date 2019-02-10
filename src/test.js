var oops = false, modal = null, uaId = 'ua-target', testId = 'test-target', topId = 'top-header',

runTest = function(p) {
  var t = typeof(p), ret = false;
    if ('string' === t) {
      try {
        var test = false;
        eval(p);
        return !!test;
      } catch (x) {}
    } else if ('function' === t) {
      try {
        ret = !!p();
      } catch(x) {}
    }
    return ret;
  },

  mkEl = function(tagname, classname, txt) {
    var el = document.createElement(tagname);
    if (classname) {
      el.className = classname;
    }
    if (txt && txt !== 0) {
      var tn = document.createTextNode(txt + '');
      el.appendChild(tn);
    }
    return el;
  },

  createModal = function() {
    if (modal) return;
    var
      elMod = mkEl('div', 'modal-wrap'), elOvl = mkEl('div', 'modal-overlay'),
      elX = mkEl('div', 'modal-close'),
      elInner = null;

    modal = {
      show: function(content) {
        if (content !== null && content !== undefined) {
          elInner = mkEl('div', 'modal-inner');
          elInner.innerHTML = content;
          elOvl.appendChild(elInner);
        }
        elMod.style.display = 'block';
      },
      hide: function() {
        elInner.parentElement.removeChild(elInner);
        elMod.style.display = 'none';
      }
    };
    elX.innerHTML = '✖';
    elX.addEventListener('click', function() {
      modal.hide();
    });
    elOvl.appendChild(elX);
    elMod.appendChild(elOvl);
    document.body.appendChild(elMod);
  },

  renderItem = function(feat, parent) {
    if (!parent || !feat || !feat.title || !feat.test) {
      return;
    }
    var
      testVal = runTest(feat.test),
      itemEl = mkEl('li', 'feature ' + (testVal ? 'pass' : 'fail')),
      rowEl = mkEl('span', 'row'),
      testEl = mkEl('span', 'checkmark'),
      descrEl = mkEl('span', 'descr'),
      ecmaHtml,
      ecmaLink,
      infoHtml;

    if (!testVal && !oops) {
      document.getElementById(uaId).setAttribute('class', 'fail');
      oops = true;
    }

    descrEl.innerHTML = feat.title;
    rowEl.appendChild(testEl);
    rowEl.appendChild(descrEl);
    itemEl.appendChild(rowEl);
    infoHtml = '<h3>' + feat.title + '</h3>\n';
    if (feat.ver && editions[feat.ver]) {
      ecmaLink = feat.ecma || editions[feat.ver][1] || '';
      ecmaHtml = ecmaLink ?
        '<a href="' + ecmaLink + '">' + editions[feat.ver][0] + '</a>' :
        '<span>' + editions[feat.ver][0] + '</span>\n';
      infoHtml += '<p class="ecma">Introduced in ' + ecmaHtml + '</p>\n';
    }
    if (feat.tip) {
      infoHtml += '<h4>Example</h4>\n<pre>\n' + feat.tip + '\n</pre>';
    }
    if (infoHtml.length) {
      itemEl.addEventListener('click', function(){
        modal.show(infoHtml);
      });
    }
    parent.appendChild(itemEl);
  },

  // render tests
  runtest = function(targId) {
    var targEl = document.getElementById(targId);
    targEl.innerHtml = '';
    for (var sectTitle in feats) {
      var
        sectEl = mkEl('div'),
        titleEl = mkEl('h2'),
        featsEl = mkEl('ul'),
        featList = feats[sectTitle];

      sectEl.className = 'section';
      titleEl.innerHTML = sectTitle;
      sectEl.appendChild(titleEl);
      featsEl.className = 'features';

      for (var i = 0, n = featList.length; i < n; i++) {
        renderItem(featList[i], featsEl);
      }
      sectEl.appendChild(featsEl);
      targEl.appendChild(sectEl);
    }
  },

  renderUA = function() {
    document.getElementById(uaId).innerHTML = navigator.userAgent;
  },

  fixTop = function(){
    var h = document.getElementById(topId).offsetHeight;
    document.getElementById(testId).setAttribute('style', 'margin-top:' + (h + 20) + 'px');
  };

window.addEventListener('load', function(){
  renderUA();
  createModal();
  runtest(testId);
  fixTop();
});
