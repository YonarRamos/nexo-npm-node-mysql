let client:any;

let user = "";
let pwd = "";
function setCredentials(_user, _password) {
    user = _user;
    pwd = _password;
}

let schema = "";
function setSchema(_schema) {
    schema = _schema;
}

let url = "";
function setUrl(_url:any) {
    url = _url;
}

let onConnected:any;
function setOnConnected(callback:any) {
    onConnected = callback;
}

let onFailure:any;
function setOnFailure(callback:any) {
    onFailure = callback;
};


function initialize() {
    if (!url) throw new Error("host not defined")
    if (!schema) throw new Error("database not defined")
    if (!user || !pwd) throw new Error("credentials not defined")

    const options = {
        client: 'mysql',
        connection: {
          host : url,
          port : 3306,
          user : user,
          password : pwd,
          database : schema
        }
    }
    
    this.client = require('knex')(options)
}

module.exports = {
    url:setUrl,
    schema:setSchema,
    credentials:setCredentials, 
    onConnected: setOnConnected,
    onFailure: setOnFailure,
    initialize,
    client
}
