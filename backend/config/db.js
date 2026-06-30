const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGODB_URI);

let database;

async function connectDB() {
    try {
        await client.connect();

        database = client.db(process.env.DB_NAME);

        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error);
        process.exit(1);
    }
}

function getDB() {
    return database;
}

module.exports = {
    connectDB,
    getDB
};