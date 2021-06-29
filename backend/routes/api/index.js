const router = require('express').Router();

// testing setup
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
