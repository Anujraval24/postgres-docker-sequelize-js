import express from "express";

const app = express();

import './src/db/config/connection.js'

app.get('/', (req, res) => {
    res.json({success: true, message: 'Hello'})
})
app.listen(3000, () => {
    console.log('Server Started at: http://localhost:3000 @@')
})