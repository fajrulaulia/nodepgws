const express = require('express');
const cors = require('cors');
const route = require('./src/route')
const { DriverDb } = require('./src/services/driver')
const app = express();
const APP_PORT = process.env.APP_PORT || 8081;

app.use(cors());
DriverDb() // health check
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(APP_PORT, () => console.log(`Server Listening on Port ${APP_PORT}`));
app.use('/api', route)