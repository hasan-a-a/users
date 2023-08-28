let userEl = document.getElementById("User")
let passEl = document.getElementById("Pass")
let loginBtn = document.getElementById("Loginbtn")
let registerEl = document.getElementById("register")
document.title = "Log In"
// let counter = 0
// let users = [["admin01","123"],["admin02","234"],["admin03","345"]]


// loginBtn.addEventListener("click", function(){
// if(counter >=3){
//     alert(`Max limit attempts reached`)
// }else{
//     counter ++
//     // alert(`Incorrect Username or Password <br> You still have ${3-counter}`)
//     for(let i=0; i<users.length; i++){
//         if(userEl.value == users[i][0] && passEl.value == users[i][1]){
//             document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
//             setTimeout(second_page,3000)
//             // if((userEl.value = true) && (passEl.value = true)){
//             //     document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
//             // setTimeout(second_page,3000)
//             }else{
//                 alert(`Incorrect Username or Password 
// You still have ${3-counter} atttempts`)
//                 break
//             }
//         }
//     }
    
// })
passEl.addEventListener("keypress", function(event){ //add keypress Enter login btn
    if(event.key === "Enter"){                      //check if the Enter key of the keyboard is pressed
        event.preventDefault()                     //run function preventdefault
       document.getElementById("Loginbtn").click()//triger the buttom login
    }
})

loginBtn.addEventListener("click", function(){

    if(counter>=3){
        alert(`Max limit attempts reached`)
    }else if(userEl.value == "admin01" && passEl.value == "123"){
        document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
        setTimeout(second_page,3000)
    }else if(userEl.value == "admin02" && passEl.value == "234"){
        document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
        setTimeout(second_page,3000)
    }else if(userEl.value == "admin03" && passEl.value == "345"){
        document.write(`<h1 style="text-align: center; color: red">Welcome ${userEl.value}</h1>`)
        setTimeout(second_page,3000)
    }else{
        counter ++
        alert(`Incorrect Username or Password 
        You still have ${3-counter} atttempts`)
    }
    })
    

function second_page(){
    window.location.replace("submit.html")
}
registerEl.addEventListener("click",function(){
    window.location.replace("submit.html")
    
})


