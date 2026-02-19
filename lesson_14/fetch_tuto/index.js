// const url = 'https://dummyjson.com/todos'

// function handleResponse(response){
//     return response.json()
// }

// function handledata(data){
//     console.log(data)
// }

// const todosContainer = document.querySelector('#todos-container')
const todosContainer = document.getElementById('todos-container')

todosContainer.textContent = 'Hello World'


fetch('https://dummyjson.com/todos')
    .then(response => response.json())
    .then(data => todosContainer.textContent = JSON.stringify(data.todos))


// synchronous function  
// asynchronous function