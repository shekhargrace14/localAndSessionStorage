let form = document.querySelector("form")


form.addEventListener("submit",(event)=>{
    let name = event.target.name.value;
    let phone = event.target.phone.value;
    let email = event.target.email.value;
})

let userData = {
    name : name,
    phone : phone,
    email : email,
}
console.log()