const mongoose = require("mongoose")

exports.connectToDB = () => {
    const { DB_HOST1, DB_HOST2, DB_HOST3, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;
    
    let connectionString;
    if (DB_USERNAME && DB_PASSWORD) {
        // connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}`
        // connectionString = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:27017,cluster0-shard-00-01-lguf1.mongodb.net:27017,cluster0-shard-00-02-lguf1.mongodb.net:27017/${DB_DATABASE}?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin`
        connectionString = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST1}:${DB_PORT},${DB_HOST2}:${DB_PORT},${DB_HOST3}:${DB_PORT}/${DB_DATABASE}?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin`
    } else {
          connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
    }
  
    console.log(`connected to ${connectionString}`);
    mongoose.set("useFindAndModify", false);
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        autoIndex: false,
    })
}