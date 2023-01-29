const dotenv = require('dotenv');
const express = require('express');
const initDb = require('./config/db')
const upload = require('../app/routes/upload');
const bodyParser = require('body-parser')
dotenv.config();

const port = process.env.APP_PORT
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(upload)

app.use(
    bodyParser.json({
        limit: '10mb'
    })
);

app.use(
    bodyParser.urlencoded({
        limit: '10mb',
        extended: true
    })
);

app.listen(`${port}`, () => {
    console.log(`🚀 app ready on port: ${port}`);
})

initDb();