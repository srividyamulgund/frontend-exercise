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

let sortByLikes = comments.comments.sort(function (a, b) {
    return a.name > b.name;
});

let sortByNewest = comments.comments.sort(function (a, b) {
    return a.name > b.name;
});

hbs.handlebars.registerHelper("list", function (posts, options) {
    const filteredPosts = posts.filter(post => post.category === 3);
    const itemsAsHtml = filteredPosts.map(post => "<li> <div class=\"row_title\"> <img src=\" \" width=\"102\" height=\"68\" alt=\"\"><br><p>" + options.fn(post) + "</p> </div><a href=\"#\">Read more</a></li>");
    return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
});

hbs.handlebars.registerHelper('toDate', function (string) {
    const date = new Date(string);
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeStyle: 'short' }).format(date);
});

hbs.handlebars.registerHelper('paragraphSplit', function (plaintext) {
    var i, output = '',
        lines = plaintext.split(/\r\n|\r|\n/g);
    for (i = 0; i < lines.length; i++) {
        if (lines[i]) {
            output += '<p class="article_paragraph">' + lines[i] + '</p>';
        }
    }
    return new hbs.handlebars.SafeString(output);
});

app.use('*/static', express.static('public'));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
