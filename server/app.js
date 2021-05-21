const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./router');
const meta = require("./content/meta.json");
const app = express();
const port = 3000;
const article = require("./content/article.json");
const posts = require("./content/posts.json");
const comments = require("../db.json");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('meta', meta);
app.set('article', article);
app.set('posts', posts);
app.set('comments', comments);

app.use('*/static', express.static('public'));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
