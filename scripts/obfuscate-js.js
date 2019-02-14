let names = 'feat, modalEl, feats, uaId, edsId, testId, scoreId, topId, okCnt, badPool, trackBad, getBadCnt, joinEdStr, lstTxt, last, getResultHtml, badCnt, suffix, eds, runTest, mkEl, tagname, classname, createModal, elMod, elX, elInner, elOvl, renderItem, testVal, itemEl, rowEl, testEl, descrEl, ecmaHtml, ecmaLink, infoHtml, parent, runtest, targId, targEl, sectTitle, sectEl, titleEl, featsEl, featList, renderHeaderEds, renderUA, fixTop, renderResult, getBadInfoStr'.split(/\W+/);

names = [...new Set(names)];

const prefix = '_';

const charList = [...new Set('mnbvcxzasdfghjklpoiuytrewq0987654321'.split(''))];

const charListLen = charList.length;

const num2name = num => {
  let buf = [], i = num;
  while (i > charListLen) {
    let j = i % charListLen;
    i = Math.floor(i / charListLen);
    buf.push(charList[j]);
  }
  buf.push(charList[i]);
  return prefix + buf.join('');
};

const replaceToken = (text, token, idx) => {
  const re = new RegExp('\\b' + token + '\\b', 'g'),
    ret = idx > -1 ? text.replace(re, num2name(idx)) : text;
  return ret;
};

const replaceAll = text => {
  let ret = text;
  names.forEach((it, idx) => {
    ret = replaceToken(ret, it, idx);
  });
  return ret;
}

module.exports = replaceAll;
