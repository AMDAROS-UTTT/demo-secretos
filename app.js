require('dotenv').config();
const express = require('express');
const app = express();

// Secreto leído desde variable de entorno, ya no está en el código
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.get('/', (req, res) => res.send('Hola'));
app.listen(3000);
