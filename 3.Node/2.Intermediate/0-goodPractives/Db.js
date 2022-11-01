const mongodb = require('mongodb');
const config = require('config');

module.exports.connect = async function () {
    const client = await mongodb.MongoClient
        .connect(`${config.get('mongoDb.host')}:${config.get('mongoDb.port')}`);
    const db = client.db(`${config.get('mongoDb.dbName')}_${process.env.NODE_ENV}`)
    return db;
}