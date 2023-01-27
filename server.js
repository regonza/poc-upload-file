const express = require('express');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
    res.send({
        data: 'Hello world!'
    });
});

app.listen(port, () => {
    console.log(`🚀 app ready on port: ${port}`);
})