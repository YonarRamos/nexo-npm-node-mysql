"use strict";

var client;
var user = "";
var pwd = "";
function setCredentials(_user, _password) {
  user = _user;
  pwd = _password;
}
var schema = "";
function setSchema(_schema) {
  schema = _schema;
}
var url = "";
function setUrl(_url) {
  url = _url;
}
var onConnected;
function setOnConnected(callback) {
  onConnected = callback;
}
var onFailure;
function setOnFailure(callback) {
  onFailure = callback;
}
;
function initialize() {
  if (!url) throw new Error("host not defined");
  if (!schema) throw new Error("database not defined");
  if (!user || !pwd) throw new Error("credentials not defined");
  var options = {
    client: 'mysql',
    connection: {
      host: url,
      port: 3306,
      user: user,
      password: pwd,
      database: schema
    }
  };
  this.client = require('knex')(options);
}
module.exports = {
  url: setUrl,
  schema: setSchema,
  credentials: setCredentials,
  onConnected: setOnConnected,
  onFailure: setOnFailure,
  initialize: initialize,
  client: client
};