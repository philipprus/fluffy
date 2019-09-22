const mongoose = require('mongoose');
const {get, KnownConfigKey } = require('../utils/config');

const { MongoConnection } = require('../utils/mongo-connection');

const url = get(KnownConfigKey.DbServer, 'mongodb://localhost:27017/fluffy');

const connection = new MongoConnection(url);

mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);

async function connectDb() {
    await connection.connect();
}
async function closeDb() {
    await connection.close();
}
module.exports = { connectDb, closeDb, };
