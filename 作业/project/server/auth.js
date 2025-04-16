const users = require('./db');

function authenticate(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

module.exports = authenticate;