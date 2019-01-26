// context variables for HTML template

const
  TITLE = 'Modern JavaScript Browser Support Test',
  FOOTER = '&copy; 2019 Vlad Podvorny';

module.exports = {
  create() {
    return ({
      TITLE,
      NOSCRIPT: `This is ${TITLE} that requires JavaScript enabled in your client application.`,
      FOOTER
    });
  }
};
