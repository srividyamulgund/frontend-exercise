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
app.set('views', './views');
app.set('view engine', 'handlebars');
app.set('meta', meta);
app.set('article', article);
app.set('posts', posts);
app.set('comments', comments);

let hbs = exphbs.create({});

hbs.handlebars.registerHelper("list", function (posts, options) {
    const filteredPosts = posts.filter(post => post.category === 3);
    const itemsAsHtml = filteredPosts.map(post => "<li> <div class=\"row_title\"> <img src=\" \" width=\"102\" height=\"68\" alt=\"\"><br><p>" + options.fn(post) + "</p> </div><a href=\"#\">Read more</a></li>");
    return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
});


app.use('*/static', express.static('public'));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
