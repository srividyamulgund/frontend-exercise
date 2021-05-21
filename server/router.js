const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render("home", {
		meta: req.app.get('meta')
	});
});
router.get('/home', (req, res) => {
	res.render("home", {
		meta: req.app.get('meta')
	});
});
router.get('/einstein-and-churchill-both-took-daily-naps', (req, res) => {
	res.render("article", {
		article: req.app.get('article'),
		posts: req.app.get('posts'),
		comments: req.app.get('comments'),
	});
});

module.exports = router;
