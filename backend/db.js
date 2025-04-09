const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/inotebook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoUri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to Mongo:", error);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectToMongo;
