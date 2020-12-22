
const mongoose = require("mongoose");

/** Create the database connection */
const connection = async () => {
    
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log(`Successfully connected!`);
}

module.exports = connection;
