const express = require('express');
const app = express();
const PORT = 3000;

// Import route
require('./routes/health')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
