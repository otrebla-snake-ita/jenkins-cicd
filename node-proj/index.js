// index.js
const express = require('express');
const app = express();
const port = 3000;

// API di test
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Ciao dal tuo primo endpoint API!' });
});


// Avvio server
app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`);
});