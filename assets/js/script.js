let registerUserEl = document.getElementById ("registerUser")
let registerPassEl = document.getElementById ("registerPass")
let registerconfEl = document.getElementById ("registerconf")
let submitEl = document.getElementById ("submit")
const users = []
document.title = "USERS"
submitEl.addEventListener("click",function(){
    if (registerUserEl.value == "" || registerPassEl.value == "") {
        alert ("Please fill in all fields.")
    }else if (registerconfEl.value !== registerPassEl.value ){
        alert ("Your password dose not match")
        return;
    }else{
        alert ("You succefuly registred")
        return;
    }
})
function addUser(registerUserEl, registerPassEl) {
    users.push([ registerUserEl, registerPassEl ]);
}