const express = require('express')
const app = express();
const port = 3000;
const db = requiere('./models');
app.set(express.json());
app.use(express.urlencoded({
    extended: false
}));