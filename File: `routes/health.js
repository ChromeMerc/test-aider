module.exports = (app) => {
    app.get('/health', (req, res) => {
        res.json({ status: "ok" });
    });
};
