const changeBtn = document.querySelector(".btnCreater");


changeBtn.addEventListener("click", function fetchUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => createUser(users[Math.floor(Math.random() * users.length)]))
    .catch(err => console.error("fetch error: ", err));


    function createUser(users){
        let nameUser = document.querySelector(".name");
        let LastUser = document.querySelector(".lastN");
        let emailUser = document.querySelector(".email");
        let companyUser = document.querySelector(".company");
        nameUser.innerHTML = users.name;
        LastUser.innerHTML = users.username;
        emailUser.innerHTML = users.email;
        companyUser.innerHTML = users.company.name;
    }
})









