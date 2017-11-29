// =============================================================================

// Dependencies

// =============================================================================
const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 8080));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});
