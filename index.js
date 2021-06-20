const express = require('express');
const cors = require('cors');
const route = require('./src/route')
const { conn } = require('./src/services/driver')
const app = express();
const APP_PORT = process.env.APP_PORT || 8081;

app.use(cors());
conn()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(APP_PORT, () => console.log(`Server Listening on Port ${APP_PORT}`));
app.use('/api', route)