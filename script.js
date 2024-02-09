

// let user = [
//     {
//         name: 'ws',
//         email: 'ws@gmail.com'
//     },
//     {
//         name: 'ws',
//         email: 'ws@gmail.com'
//     }
// ]

// localStorage.setItem("name" ,JSON.stringify(user));
// // localStorage.setItem("name" ,user);

// let getItem = localStorage.getItem("name")

// JSON.parse(getItem)

// console.log(localStorage.getItem("name"))






let form = document.querySelector("form")
let main = document.querySelector(".main")
form.addEventListener("submit", (event)=>{
    let name = event.target.name.value;
    let phone = event.target.phone.value;
    let email = event.target.email.value;

    var checkStatus = 0;

    // Null handle operators "? []";

    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [] ;
    for(let v of userData){
        if(v.email == email || v.phone == phone){
            checkStatus = 1;
            break;
        }
    }
    if(checkStatus==1){
        alert("Email or Phone already exist.")
    }else{
        userData.push({
            'name': name,
            'email': email,
            'phone': phone
        })
        localStorage.setItem("userDetails",JSON.stringify(userData))
        // event.target.reset()

    }


    displayData()

    // userData = localStorage.removeItem("userDetails")
    event.preventDefault();


})

let displayData=()=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [] ;
    let finalData ='';

    userData.forEach((element,i) => {
        finalData+=`
            <div class="column card">   
                <span onclick="removeData(${i})" >&#10006;</span>
                <h5>Name</h5>
                <p>${element.name}</p>

                <h5>Phone</h5>
                <p>${element.phone}</p>
                
                <h5>Email</h5>
                <p>${element.email}</p>


            </div>
        `
    });
    main.innerHTML = finalData


    console.log(userData)
}


let removeData=(index)=>{

    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [] ;

    userData.splice(index,1)

    localStorage.setItem("userDetails",JSON.stringify(userData))

    displayData()

}


// displayData()



