const { MongoClient } = require("mongodb");
require("dotenv").config();

let client;
let db;

async function connectDB() {

    if (db) {
        return db;
    }

    client = new MongoClient(process.env.MONGODB_URI);

    await client.connect();

    db = client.db(process.env.DB_NAME);

    console.log("MongoDB Connected");

    return db;
}

function getDB() {
    return db;
}

module.exports = {
    connectDB,
    getDB
};