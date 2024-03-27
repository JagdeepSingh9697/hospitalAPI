const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Database Connection with Mongoose
mongoose.connect('mongodb+srv://jaggi761:jaggi761@cluster0.bemmqnx.mongodb.net/hospital_API?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

//Connection Error Handling
db.on('error', console.error.bind(console, "Error connecting to the databse"));

//Connection Successful
db.once('open', function () {
    console.log("Successfully connected to the Database");
});