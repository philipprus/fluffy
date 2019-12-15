const dotenv = require('dotenv');

function init() {
    dotenv.config();
}
const KnownConfigKey = {
    JwtSecret: 'SECRET',
    ServerPort: 'PORT',
    DbServer: 'DATABASE',
};
function get(key, fallback = '') {
    return process.env[key] || fallback; 
}

module.exports = { get, init, KnownConfigKey };


