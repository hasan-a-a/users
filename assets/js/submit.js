let registerUserEl = document.getElementById ("registerUser")
let registerPassEl = document.getElementById ("registerPass")
let registerconfEl = document.getElementById ("registerconf")
let submitEl = document.getElementById ("submit")
let olduser = document.getElementById ("olduser")
const users = []
document.title = "USERS"
submitEl.addEventListener("click",function(){
    if (registerUserEl.value == "" || registerPassEl.value == "") {
        alert ("Please fill in all fields.")
        reset()
    }else if (registerconfEl.value !== registerPassEl.value ){
        alert ("Your password dose not match")
        reset()
        return;
    }else{
        alert ("You succefuly registred")
        reset()
        setTimeout(secondPage,1000);
      
        return;
    }
})
function reset(){
    registerUserEl.value = "";
    registerPassEl.value = "";
    registerconfEl.value = "";
    registerUserEl.focus()
}
function secondPage(){
    window.location.replace("index.html")
}
olduser.addEventListener("click",function(){
    window.location.replace("index.html")
})

