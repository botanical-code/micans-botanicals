const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://fjmfaudv:3mHYklewh-Sv2NCB36Z6baEL7HNOoK1f@jelani.db.elephantsql.com/fjmfaudv')

async function sequelizeConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ping', (req, res) => {
    res.json('pong')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    sequelizeConnection()
})