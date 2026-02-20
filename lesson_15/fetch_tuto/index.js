// const url = 'https://dummyjson.com/todos'

// function handleResponse(response){
//     return response.json()
// }

// function handledata(data){
//     console.log(data)
// }

// const todosContainer = document.querySelector('#todos-container')
const todosContainer = document.getElementById('todos-container')



let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzE2MDY3NzAsImV4cCI6MTc3MTYwODU3MH0.fMuzod_I2AXGCD67FW0VISr6F7gD_K5w_Z3UT1sXlz0"


// fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'emilys',
//     password: 'emilyspass',
//     expiresInMins: 30, // optional, defaults to 60
// }),
// //   credentials: 'include' // Include cookies (e.g., accessToken) in the request
// })
// .then(res => res.json())
// .then(data => {
//     accessToken = data.accessToken
//     console.log(data)
// })

fetch('https://dummyjson.com/auth/todos', 
    {method: 'GET',
    //  body: JSON.stringify({
    //     todo: 'acheter une voiture.',
    //     completed: false,
    //  }),
     headers:{
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
     }
    }
)
.then(response => response.json())
.then(data => console.log(data))
// synchronous function  
// asynchronous function