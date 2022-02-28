const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB.
const url = "mongodb+srv://Boobalan:boobalan1234@cluster0.ixzoi.mongodb.net/Blog-App";
let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {      
        console.log('MongoDB Connection Succeeded.') 
    } else {
        console.log('Error in DB connection: ' + err) 
    }
});
