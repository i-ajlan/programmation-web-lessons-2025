const usersContainer = document.getElementById("users-container")

console.log(usersContainer)

function renderUsers(data){
     let usersHtml = ''
        for(let user of data.users){

            usersHtml +=  `
                <div id="user">
                    <div id="img-container">
                        <img id="user-profile" src="${user.image}" alt="profile picture"/>
                    </div>
                    <div id="user-details">
                        <p id="user-title">${user.company.title}</p>
                        <p id="user-name">${user.firstName} <span id="user-last-name">${user.lastName}<span></p>
                        <p id="user-email">${user.email}</p>
                        <p id="user-phone">${user.phone}</p>
                    </div>
                </div>        
        `}       
        usersContainer.innerHTML = usersHtml
}

fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
            renderUsers(data)
        })