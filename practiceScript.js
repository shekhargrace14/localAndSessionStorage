let form = document.querySelector("form")


form.addEventListener("submit",(event)=>{
    let name = event.target.name.value;
    let phone = event.target.phone.value;
    let email = event.target.email.value;
    
    let userData = {
        UserName : name,
        userPhone : phone,
        userEmail : email,
    }

    let oldData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    
    oldData.push(userData)

    localStorage.setItem("userDetails", JSON.stringify(oldData)) ;    

    // console.log(JSON.parse(localStorage.getItem("userDetails")));

    // localStorage.removeItem("userDetails")

    
    event.preventDefault();
    displayData()
})

let displayData=()=>{
    let userDisplayData = JSON.parse(localStorage.getItem("userDetails")) ?? [];  
    // console.log(userDisplayData)
    let main = document.querySelector(".main")
    userDisplayData.forEach((element, i)=>{
        main.insertAdjacentHTML("afterbegin",`
        <div class="column card">   
            <span onclick="removeData(${i})" >&#10006;</span>
            <h5>Name</h5>
            <p>${element.UserName}</p>
            <h5>Phone</h5>
            <p>${element.userPhone}</p>
            <h5>Email</h5>
            <p>${element.userEmail}</p>
        </div>
        `)
    })
}

let removeData=(index)=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    
    userData.splice(index,1)

    localStorage.setItem("userDetails", JSON.stringify(userData))
    
    console.log(index, "this is index");
    displayData()
}
// displayData()



