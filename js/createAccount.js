let data = [
    "USE AFTERPAY TO BUY NOW & PAY LATER!",
    "$3 RUSH 1-DAY SHIPPING WITH PURCHASES OVER &100! US ONLY",
    "Track your order"
];

let container = document.getElementById("sliding");
startSlidshow();
function startSlidshow() {
    
    let count = 0;

    let p = document.createElement("p");
    p.innerText = data[count];

    setInterval(function () {
        count++;
        container.innerHTML = null;
        // alert("hai")

        if(count === data.length){
            count = 0;
        }
        p.innerText = data[count];
        container.append(p);
        
    },3000);        
}
        // ******************add product************

function addProduct(event) {      
    event.preventDefault();
    let myForm = document.getElementById("signup");
    let fName = myForm.fName.value;
        console.log("fname:", fName);
    let lName = myForm.lName.value;
        console.log("lname:", lName);
    let email = myForm.email.value;
        console.log("email:", email);
    let password = myForm.password.value;
        console.log("password:", password);

    let user_details = {};

    user_details['fName'] = fName;
    user_details['lName'] = lName;
    user_details['email'] = email;
    user_details['password'] = password;

    console.log('user_details:', user_details);
    
    
    //store in the local storage
    storeInLocal(user_details);
    // showProducts();
}

if (localStorage.getItem("user_details") === null) {
    localStorage.setItem("user_details", JSON.stringify([]));
}
if (localStorage.getItem("temp_user_details") === null) {
    localStorage.setItem("temp_user_details", JSON.stringify([]));
}

function storeInLocal(user_details) {
let userDetails = JSON.parse(localStorage.getItem("user_details"));



userDetails.push(user_details);    

localStorage.setItem("user_details", JSON.stringify(userDetails));
localStorage.setItem("temp_user_details", JSON.stringify(userDetails));

console.log('user_details:', userDetails)
window.location.href = "landingpage.html";
}