const connectToMongo = require('./db');
const express = require('express');
const app = express();

connectToMongo();
const port = 3000;

// Available routes
app.get('/api/auth', require('./routes/auth'));
app.get('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});