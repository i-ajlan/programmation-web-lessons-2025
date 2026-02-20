const usersContainer = document.getElementById("users-container")
const userForm = document.getElementById('user-form')
// const inputTitle = document.getElementById('input-title')
// const inputName = document.getElementById('input-name')
// const inputEmail = document.getElementById('input-email')

let usersArr = []

userForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('submit')
    const userFormData = new FormData(userForm)

    const newUser = {
        image: '',
        firstName: userFormData.get('name'),
        lastName: '',
        email: userFormData.get('email'),
        phone: userFormData.get('phone'),
        company:{
            title: userFormData.get('title')
        }
    }

    usersArr.unshift(newUser)
    userForm.reset()
    renderUsers(usersArr)
    // console.log(usersArr)
    // console.log(userFormData.get('title'))
    // console.log(userFormData.get('name'))
    // console.log(userFormData.get('email'))
    // console.log(userFormData.get('phone'))
    // console.log(inputTitle.value)
    // console.log(inputName.value)
    // console.log(inputEmail.value)

    // inputTitle.value = ''
    // inputName.value = ''
    // inputEmail.value = ''
})






function renderUsers(users){
     let usersHtml = ''
        for(let user of users){

            usersHtml +=  `
                <div class="user">
                    <div class="img-container">
                        <img class="user-profile" src="${user.image}" alt="profile picture"/>
                    </div>
                    <div class="user-details">
                        <p class="user-title">${user.company.title}</p>
                        <p class="user-name">${user.firstName} <span class="user-last-name">${user.lastName}<span></p>
                        <p class="user-email">${user.email}</p>
                        <p class="user-phone">${user.phone}</p>
                    </div>
                </div>        
        `}       
        usersContainer.innerHTML = usersHtml
}

fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
            // console.log(data)
            usersArr = data.users
            renderUsers(usersArr)
        })