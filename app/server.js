const express = require('express');

const userRouters = require('../app/routes/user');

const app = express();

const port = 3001;

app.use(userRouters)

app.listen(port, () => {
    console.log(`🚀 app ready on port: ${port}`);
})