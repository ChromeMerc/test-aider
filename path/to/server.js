const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, 'localhost', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
