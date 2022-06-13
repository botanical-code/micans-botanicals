const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})