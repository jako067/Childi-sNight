let form =document.getElementById("form");

function saveUser(){

let name= document.getElementById("user").value;
let password = document.getElementById("password").value;
localStorage.setItem('user',name);
localStorage.setItem('password',password);
}
form.addEventListener('click',saveUser);

