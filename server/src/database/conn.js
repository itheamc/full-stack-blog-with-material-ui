const mongoose = require('mongoose');

const DB_NAME = "blog-posts";
const DB_URL = `mongodb+srv://admin_amc:amchau123@cluster0.j1ctp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;


mongoose.connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => {
    console.log('Your app is successfully connected with the database');
})
.catch((err) => {
    console.log(`Unable to connect with database due to ${err.message}`);
});


module.exports = mongoose;