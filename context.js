// context variables for HTML template

const
  YEAR = 2019,
  TITLE = 'Modern JavaScript Browser Support Test',
  DESCRIPTION = 'JavaScript browser support test page covering the features introduced in ECMA-262 (ECMAScript) specification since the 6th Edition released in 2015.';

module.exports = {
  create() {
    return ({
      TITLE,
      DESCRIPTION,
      AUTHOR: 'Vlad Podvorny',
      NOSCRIPT: `${DESCRIPTION} Make sure JavaScript is enabled in your client application.`,
      REPO_URL: 'https://github.com/fishwasher/jstest2015plus',
      REPO_TEXT: 'Visit GitHub',
      YEAR
    });
  }
};
