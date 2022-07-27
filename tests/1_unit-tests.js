const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  test('Translate "Mangoes are my favorite fruit" to British English', function() {
    const translation = translator.translate("Mangoes are my favorite fruit", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'favourite', 'translation should include British spelling of "favorite"');
  });
  
  test('Translate "I ate yogurt for breakfast." to British English', function() {
    const translation = translator.translate("I ate yogurt for breakfast.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'yoghurt', 'translation should include British spelling of "yogurt"');
  });

  test('Translate "We had a party at my friends condo." to British English', function() {
    const translation = translator.translate("We had a party at my friend's condo.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'flat', 'translation should include British translation of "condo"');
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', function() {
    const translation = translator.translate("Can you toss this in the trashcan for me?", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'bin', 'translation should include British translation of "trashcan"');
  });

  test('Translate "The parking lot was full." to British English', function() {
    const translation = translator.translate("The parking lot was full.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'car park', 'translation should include British translation of "parking lot"');
  });

  test('Translate "Like a high tech Rube Goldberg machine." to British English', function() {
    const translation = translator.translate("Like a high tech Rube Goldberg machine.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'Heath Robinson device', 'translation should include British translation of "Rube Goldberg machine"');
  });

  test('Translate "To play hooky means to skip class or work." to British English', function() {
    const translation = translator.translate("To play hooky means to skip class or work.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'bunk off', 'translation should include British translation of "play hooky"');
  });

  test('Translate "No Mr. Bond, I expect you to die." to British English', function() {
    const translation = translator.translate("No Mr. Bond, I expect you to die.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'Mr', 'translation should include British translation of "Mr"');
  });

  test('Translate "Dr. Grosh will see you now." to British English', function() {
    const translation = translator.translate("Dr. Grosh will see you now.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'Dr', 'translation should include British translation of "Dr"');
  });

  test('Translate "Lunch is at 12:15 today." to British English', function() {
    const translation = translator.translate("Lunch is at 12:15 today.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, '12.15', 'translation should include British translation of "12:15"');
  });

  test('Translate "We watched the footie match for a while." to American English', function() {
    const translation = translator.translate("We watched the footie match for a while.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'soccer', 'translation should include American translation of "footie"');
  });

  test('Translate "Paracetamol takes up to an hour to work." to American English', function() {
    const translation = translator.translate("Paracetamol takes up to an hour to work.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'Tylenol', 'translation should include American translation of "Paracetamol"');
  });

  test('Translate "First, caramelise the onions." to American English', function() {
    const translation = translator.translate("First, caramelise the onions.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'caramelize', 'translation should include American translation of "carmelise"');
  });

  test('Translate "I spent the bank holiday at the funfair.', function() {
    const translation = translator.translate("I spent the bank holiday at the funfair.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'public holiday', 'translation should include American translation of "bank holiday"');
  });

  test('Translate "I had a bicky then went to the chippy.', function() {
    const translation = translator.translate("I had a bicky then went to the chippy.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'cookie', 'translation should include American translation of "bicky"');
    assert.include(translation, 'fish-and-chip shop', 'translation should include American translation of "chippy"');
  });

  test('Translate "I\'ve just got bits and bobs in my bum bag.', function() {
    const translation = translator.translate("I've just got bits and bobs in my bum bag.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'odds and ends', 'translation should include American translation of "bits and bobs"');
    assert.include(translation, 'fanny pack', 'translation should include American translation of "bum bag"');
  });

  test('Translate "The car boot sale at Boxted Airfield was called off.', function() {
    const translation = translator.translate("The car boot sale at Boxted Airfield was called off.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'swap meet', 'translation should include American translation of "car boot sale"');
  });

  test('Translate "Have you met Mrs Kalyani?', function() {
    const translation = translator.translate("Have you met Mrs Kalyani?", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'Mrs.', 'translation should include American translation of "Mrs"');
  });

  test('Translate "Prof Joyner of King\'s College, London.', function() {
    const translation = translator.translate("Prof Joyner of King's College, London.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, 'Prof.', 'translation should include American translation of "Prof"');
  });

  test('Translate "Tea time is usually around 4 or 4.30.', function() {
    const translation = translator.translate("Tea time is usually around 4 or 4.30.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, '4:30', 'translation should include American translation of "4.30"');
  });

  test('Highlight translation in "Mangoes are my favorite fruit."', function() {
    const translation = translator.translate("Mangoes are my favorite fruit.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, '<span class="highlight">favourite</span>', 'translation should include highlight"');
  });

  test('Highlight translation in "I ate yogurt for breakfast."', function() {
    const translation = translator.translate("I ate yogurt for breakfast.", 'american-to-british');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, '<span class="highlight">yoghurt</span>', 'translation should include highlight"');
  });

  test('Highlight translation in "We watched the footie match for a while."', function() {
    const translation = translator.translate("We watched the footie match for a while.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, '<span class="highlight">soccer</span>', 'translation should include highlight"');
  });

  test('Highlight translation in "Paracetamol takes up to an hour to work."', function() {
    const translation = translator.translate("Paracetamol takes up to an hour to work.", 'british-to-american');
    assert.isString(translation, 'translation should be a string');
    assert.include(translation, '<span class="highlight">Tylenol</span>', 'translation should include highlight"');
  });
});
