const db = require('./db/db');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const port = 3001
const app = express();
app.use(cors())
app.use(express.json())
app.post('/register', async (req, res) => {
    const { email } = req.body
    try {
        await db.query('INSERT INTO emails (email) VALUES (?)', [email])
        res.status(201).send('email submitted successfully')
    } catch (error) {
        console.error(error);
        res.status(500).send('internal server error')
    }
})
app.listen(port, () => console.log('listening on port 3001'));