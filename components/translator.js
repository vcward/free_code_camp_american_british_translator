const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  getAmericanTime(text) {
    const britishTimeRegex = /\d{1,2}.\d{1,2}/g;
    return text.replaceAll(britishTimeRegex, (match) => {
      return this.addHighlightSpan(match.replace('.', ':'));
    });
  }

  getBritishTime(text) {
    const americanTimeRegex = /\d{1,2}:\d{1,2}/g;
    return text.replaceAll(americanTimeRegex, (match) => {
      return this.addHighlightSpan(match.replace(':', '.'));
    });
  }

  translateTime(text, locale) {
    const matchTime = text.match(/\d{1,2}[:|.]\d{1,2}/g);
    if (matchTime && locale === 'american-to-british') {
      return this.getBritishTime(text);
    }
    if (matchTime && locale === 'british-to-american') {
      return this.getAmericanTime(text);
    }
    return text;
  }

  capitalize(str) {
    // capitalize titles
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  addHighlightSpan(str) {
    return `<span class="highlight">${str}</span>`;
  }

  translateToBritish(text, locale) {
    text = this.getTranslationFromKey(americanOnly, text, false);
    text = this.getTranslationFromKey(americanToBritishSpelling, text, false);
    text = this.getTranslationFromKey(americanToBritishTitles, text, true);
    text = this.translateTime(text, locale);
    return text;
  }

  getTranslationFromKey(dictionary, text, capitalize) {
    Object.keys(dictionary).forEach((key) => {
      const regExp = this.getRegexPatternString(key);
      text = text.replaceAll(regExp, (match) => {
        return this.replaceText(regExp, match, dictionary[key], capitalize);
      });
    });
    return text;
  }

  getTranslationFromValue(dictionary, text, capitalize) {
    Object.values(dictionary).forEach((value) => {
      const regExp = this.getRegexPatternString(value);
      text = text.replaceAll(regExp, (match) => {
        return this.replaceText(regExp, match, this.getDictionaryKey(dictionary, value), capitalize);
      });
    });
    return text;
  }

  replaceText(regExp, match, replacement, capitalize) {
    let replace = match.replace(regExp, replacement);
    if (capitalize) {
      replace = this.capitalize(replace);
    }
    return this.addHighlightSpan(replace);
  }

  getDictionaryKey(dictionary, value) {
    return Object.keys(dictionary).find(key => dictionary[key] === value);
  }

  getRegexPatternString(str) {
    const escapedString = str.includes('.') ? str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') : `${str}\\b`;
    return new RegExp(`\\b${escapedString}`, 'gi');
  }

  translateToAmerican(text, locale) {
    text = this.getTranslationFromKey(britishOnly, text, false);
    text = this.getTranslationFromValue(americanToBritishSpelling, text, false);
    text = this.getTranslationFromValue(americanToBritishTitles, text, true);
    text = this.translateTime(text, locale);
    return text;
  }

  translate(text, locale) {
    const splitOriginal = text.split(' ');
    let translatedText = '';
    if (locale === 'american-to-british') {
      translatedText = this.translateToBritish(text, locale);
    }
    if (locale === 'british-to-american') {
      translatedText = this.translateToAmerican(text, locale);
    }
    return translatedText === text ? 'Everything looks good to me!' : translatedText;
  }

}

module.exports = Translator;