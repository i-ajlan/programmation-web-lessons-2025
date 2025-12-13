let toDoList =  ['acheter une voiture', 'nettoyer la chambre']
let inputElement = document.querySelector('.task_name')
let taskContainer = document.querySelector('.tasks_container')

function renderTheList(){
    taskContainer.innerHTML=''
    for(let i=0; i<toDoList.length; i++){
        taskContainer.innerHTML += `
        <p>${toDoList[i]}
        <button onclick="
            toDoList.splice(${i}, 1);
            renderTheList();
            console.log(toDoList);
        ">delete</button>
        </p>
        `
    }
}
renderTheList()
// console.log(taskContainer)

function addToList(){
    let name = inputElement.value 
    toDoList.push(name)
    inputElement.value = ''
    renderTheList()
    console.log(toDoList);
}