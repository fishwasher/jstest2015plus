var modalEl = null, uaId = 'ua-target',
edsId = 'ed-target', testId = 'test-target',
scoreId = 'score-target', topId = 'top-header',

okCnt = 0,

badPool = {},

trackBad = function(ed, id) {
  badPool[ed] || (badPool[ed] = []);
  badPool[ed].push(id);
},

getBadCnt = function() {
  var c = 0;
  for (var k in badPool) {
    c += badPool[k].length;
  }
  return c;
},

getBadInfoStr = function() {
  var s = '', o = badPool;
  eval('s=JSON.stringify(o)');
  return s;
},

joinEdStr = function(obj) {
  var
    lst = Object.keys(obj).map(function(it) {
      return it.replace('es', '');
    }).sort(),
    suffix = lst.length === 1 ? '' : 's',
    last = lst.length > 1 ? lst.pop() : '',
    lstTxt = lst.length > 1 ? lst.join(', ') : lst.length === 1 ? lst[0] : '';
  if (lstTxt) {
    if (last) lstTxt += ' and ' + last;
  }
  return lstTxt.length ? 'Edition' + suffix + ' ' + lstTxt : '';
},

getResultHtml = function() {
  if (!okCnt) return '<p class="fail">All tests failed.</p>';
  var badCnt = getBadCnt(),
    suffix = badCnt === 1 ? '' : 's',
    eds = joinEdStr(badPool);
  return badCnt ? '<p class="fail"><strong>' + badCnt + '</strong> test' + suffix + ' failed (features from ' + eds + ')</p>' :
    '<p class="pass">All tests passed.</p>';
},

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
    if (modalEl) return;
    var
      elMod = mkEl('div', 'modal-wrap'),
      elOvl = mkEl('div', 'modal-overlay'),
      elX = mkEl('div', 'modal-close'),
      elInner = null;

    modalEl = {
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

    elOvl.appendChild(elX);
    elMod.appendChild(elOvl);
    document.body.appendChild(elMod);
    window.addEventListener('click', function(ev) {
      if (ev.target == elX || ev.target == elMod)
      modalEl.hide();
      ev.preventDefault();
    });
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

    if (testVal) {
      okCnt ++;
    } else {
      trackBad(feat.ver, feat.fid || '?');
    }

    descrEl.innerHTML = feat.title;
    rowEl.appendChild(testEl);
    rowEl.appendChild(descrEl);
    itemEl.appendChild(rowEl);
    infoHtml = '<h3>' + feat.title + '</h3>\n';
    if (feat.ver && eds[feat.ver]) {
      ecmaLink = feat.ecma || eds[feat.ver][1] || '';
      ecmaHtml = ecmaLink ?
        '<a href="' + ecmaLink + '">' + eds[feat.ver][0] + '</a>' :
        '<span>' + eds[feat.ver][0] + '</span>\n';
      infoHtml += '<p class="ecma">Introduced in ' + ecmaHtml + '</p>\n';
      if (feat.note) {
        infoHtml += '<div class="note">' + feat.note + '</div>';
      }
    }
    if (feat.tip) {
      infoHtml += '<h4>Example</h4>\n<pre>\n' + feat.tip + '\n</pre>';
    }
    if (infoHtml.length) {
      itemEl.addEventListener('click', function(){
        modalEl.show(infoHtml);
      });
    }
    parent.appendChild(itemEl);
  },

  // render tests
  runtest = function() {
    var targEl = document.getElementById(testId);
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

  renderHeaderEds = function() {
    document.getElementById(edsId).innerHTML = '<p>New features from ECMAScript ' + joinEdStr(eds) + '</p>';
  },

  renderUA = function() {
    document.getElementById(uaId).innerHTML = navigator.userAgent;
  },

  renderResult = function() {
    document.getElementById(scoreId).innerHTML = getResultHtml();
  },

  fixTop = function(){
    var h = document.getElementById(topId).offsetHeight;
    document.getElementById(testId).setAttribute('style', 'margin-top:' + (h + 20) + 'px');
  };

window.addEventListener('load', function(){
  renderHeaderEds();
  renderUA();
  createModal();
  runtest();
  renderResult();
  fixTop();
  //console.log(getBadInfoStr());
});
