const mongoose = require('mongoose');
const {get, KnownConfigKey } = require('../utils/config');

const { MongoConnection } = require('../utils/mongo-connection');

const url = process.env.NODE_ENV !== 'production' ? 'mongodb://localhost:27017/fluffy?retryWrites=true&w=majority' : "mongodb+srv://fl_user_123:AnjukRa4jUqmseBt@cluster0-di3uu.mongodb.net/db_fluffy?retryWrites=true&w=majority";

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
