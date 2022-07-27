'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const reqHasRequiredFields = req.body.hasOwnProperty('text') && req.body.hasOwnProperty('locale');
      const validLocales = ['american-to-british', 'british-to-american']
      if (!reqHasRequiredFields) {
        res.json({
          error: 'Required field(s) missing'
        });
        return;
      }
      const { text, locale } = req.body;
      if (reqHasRequiredFields) {
        if (text === '') {
          res.json({
            error: 'No text to translate'
          });
          return;
        }
        if (!validLocales.includes(locale)) {
          res.json({
            error: 'Invalid value for locale field'
          });
          return;
        }
        translator.translate(text, locale)
        res.json({
          text,
          translation: translator.translate(text, locale)
        });
      }
    }); 
};
