// const todoTitleDiv = document.getElementById('todoTitleDiv')

// const httpRequest = new XMLHttpRequest()
// httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
// httpRequest.send()
// httpRequest.onload = () => {
//    const data = JSON.parse(httpRequest.response)
//    todoTitleDiv.innerText = data.title
// }

const todoListUl = document.getElementById('todoListUl');

const httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();
httpRequest.onload = () => {
   const data = JSON.parse(httpRequest.response);
   const todoList = data.slice(0, 20);
   todoList.forEach(todo => {
      const li = document.createElement('li');
      li.innerText = todo.title;
      todoListUl.appendChild(li);
   });
};



