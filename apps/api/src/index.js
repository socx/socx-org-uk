const express = require('express');
const cors = require('cors');

const app = express();
const port = Number(process.env.API_PORT) || 3002;

app.use(cors({ origin: 'http://localhost:5172' }));

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'socx-api',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`[api] listening on http://localhost:${port}`);
});
