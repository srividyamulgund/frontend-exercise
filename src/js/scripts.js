const scripts = () => {

    const app = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'comments');

    app.appendChild(container);

    let request = new XMLHttpRequest();
    request.open('GET', 'https://my-json-server.typicode.com/telegraph/frontend-exercise/comments', true);
    request.onload = function () {

        // Begin accessing JSON data here
        let data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach(comment => {
                const ul = document.createElement('ul');
                ul.setAttribute('class', 'stories_list');

                const li = document.createElement('li');

                const h5Name = document.createElement('h5');
                h5Name.setAttribute('class', 'stories_list_child');
                h5Name.textContent = comment.name;

                const h5Likes = document.createElement('h5');
                h5Likes.setAttribute('class', 'stories_list_child');
                h5Likes.textContent = comment.likes;

                const h5Date = document.createElement('h5');
                h5Date.setAttribute('class', 'stories_list_child');
                h5Date.textContent = comment.date;

                const p = document.createElement('p');
                comment.body = comment.body.substring(0, 300);
                p.textContent = `${comment.body}...`;

                container.appendChild(ul);
                ul.appendChild(li);
                li.appendChild(h5Name);
                li.appendChild(h5Likes);
                li.appendChild(h5Date);
                li.appendChild(p);
            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Ah, it's not working!`;
            app.appendChild(errorMessage);
        }
    }

    request.send();
}

module.exports = {
    scripts
};