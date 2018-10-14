// context variables for HTML template

const
  TITLE = 'Modern JavaScript Test Page',
  FOOTER = 'a good footer';

module.exports = {
  create() {
    return ({
      TITLE,
      NOSCRIPT: `This is ${TITLE} that requires JavaScript enabled in your client application.`,
      FOOTER
    });
  }
};
