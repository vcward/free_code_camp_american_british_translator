const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test('Translation with text and locale fields: POST req', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'Test translation',
        locale: 'american-to-british'
      })
      .end(function(error, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'resposne is an object');
        assert.property(res.body, 'text', 'response contains text property');
        assert.property(res.body, 'translation', 'response contains translation property');
        done();
      });
  });

  test('Translation with text and invalid locale fields: POST req', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'Test translation',
        locale: 'american-'
      })
      .end(function(error, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'resposne is an object');
        assert.property(res.body, 'error', 'response contains text property');
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

  test('Translation with missing text field: POST req', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        locale: 'american-'
      })
      .end(function(error, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'resposne is an object');
        assert.property(res.body, 'error', 'response contains text property');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  test('Translation with missing locale field: POST req', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'test translation'
      })
      .end(function(error, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'resposne is an object');
        assert.property(res.body, 'error', 'response contains text property');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  test('Translation with empty text field: POST req', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: '',
        locale: 'american-to-british'
      })
      .end(function(error, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'resposne is an object');
        assert.property(res.body, 'error', 'response contains text property');
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });

  test('Translation with text that needs no translation: POST req', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'Nothing to translate',
        locale: 'american-to-british'
      })
      .end(function(error, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'resposne is an object');
        assert.property(res.body, 'translation', 'response contains text property');
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });
});
