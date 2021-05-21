const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render("home", {
		meta: req.app.get('meta')
	});
});
router.get('/einstein-and-churchill-both-took-daily-naps', (req, res) => {
	res.render("article", {
		article: req.app.get('article')
	});
});

module.exports = router;
