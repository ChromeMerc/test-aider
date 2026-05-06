const express = require('express');
const app = express();
app.use(express.json()); // Move this line after const app = express();

app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

// Import the scan logic from scan.py and convert it to JavaScript
function checkPort(target, port) {
    // Simplified example of checking a port using Node.js
    const https = require('https');
    return new Promise((resolve) => {
        const options = {
            hostname: target,
            port: port,
            method: 'HEAD',
            timeout: 2000
        };

        const req = https.request(options, (res) => {
            if (res.statusCode === 200) resolve('open');
            else resolve('closed');
        });

        req.on('error', (err) => {
            console.error(`Error: ${err.message}`);
            resolve('error');
        });

        req.end();
    });
}

app.post('/scan', (req, res) => {
    const { target, port } = req.body; // This should now work
    if (!target || !port) return res.status(400).json({ error: 'Invalid request' });

    checkPort(target, port)
        .then(status => res.json({ target, port, status }))
        .catch(() => res.status(500).json({ error: 'An error occurred' }));
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
