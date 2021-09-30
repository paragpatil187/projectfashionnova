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
if (localStorage.getItem("temp_user_details") === null) {
    localStorage.setItem("temp_user_details", JSON.stringify([]));
}

function check(event){
    // alert("hai")
    event.preventDefault();
    let myForm = document.getElementById("login");
    let email = myForm.email.value;
        console.log("email:", email);
    let password = myForm.password.value;
        console.log("password:", password);
    
    let user_details = JSON.parse(localStorage.getItem("user_details"));

    for (let index = 0; index < user_details.length; index++) {
        if((user_details[index].email == email) && (user_details[index].password == password)){

            // alert("This one is Already exists in the cart");
            localStorage.setItem("temp_user_details", JSON.stringify(user_details));
            window.location.href = "landingpage.html";
            return;
        }
    }
    alert("user name or password is incorrect");
}