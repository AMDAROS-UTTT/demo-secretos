const express = require('express');
const app = express();

// ERROR COMÚN: secreto escrito directamente en el código
const GITHUB_TOKEN = "***REMOVIDO***";

app.get('/', (req, res) => res.send('Hola'));
app.listen(3000);
