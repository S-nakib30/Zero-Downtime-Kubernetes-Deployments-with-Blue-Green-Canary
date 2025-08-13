const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const version = process.env.VERSION || 'v1';

app.get('/', (req, res) => {
  res.send(`Hello from Zero-Downtime App — Version: ${version}\n`);
});

// readiness endpoint (returns 200 when ready)
app.get('/ready', (req, res) => res.status(200).send('ready'));

app.listen(port, () => {
  console.log(`App listening on port ${port} (version: ${version})`);
});
