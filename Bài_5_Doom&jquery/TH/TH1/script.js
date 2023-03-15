
const todoList = document.querySelector('ul');


const news = document.createElement('li');
news.textContent = 'Do homework';

todoList.appendChild(news);


const inserts = document.createElement('li');
inserts.textContent = 'Pay bills';
todoList.insertBefore(inserts, todoList.firstElementChild);


const replaces = document.createElement('li');
replaces.textContent = 'Feed the dog';

todoList.replaceChild(replaces, todoList.children[2]);


todoList.children[1].remove();