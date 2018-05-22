const Mock = require('mockjs');
const util = require('./util');

module.exports = function (app) {
  app.post('/auth/login', function (req, res) {
    var json = util.getJsonFile('./login.json');
    res.json(Mock.mock(json))
  });

  app.post('/auth/register', function (req, res) {
    var json = util.getJsonFile('./register.json');
    res.json(Mock.mock(json))
  });

  app.get('/user/list', function (req, res) {
    var json = util.getJsonFile('./listUser.json');
    res.json(Mock.mock(json))
  });

  app.post('/user/add', function (req, res) {
    var json = util.getJsonFile('./addUser.json');
    res.json(Mock.mock(json))
  });
};