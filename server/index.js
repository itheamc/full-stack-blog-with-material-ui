const express = require('express');
const router = require('./src/routes/posts');
// import router from './src/routes/posts';
// import express from "express";  // Here import statement is used because i have inserted "type": "module" below the "main": "index.js" in the package.json
require('./src/database/conn');     // Requiring database connection

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/posts', router);

//Function to check weather app is successfully running or not
const listentApp = () => {
    app.listen(PORT, () => {
        console.log(`Server is successfully running at port - ${PORT}`);
    });
}

listentApp();   // Calling function to listent the app