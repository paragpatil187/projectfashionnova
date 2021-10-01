 // right side products

 let parent= document.getElementById("productdetails")
 let cart= JSON.parse(localStorage.getItem("fashion_cart"));

 function showProducts(){
    
cart.forEach(function (el){
 

  let div= document.createElement("div");

  let det = document.createElement("div");
  let img= document.createElement("img");
  let product_price= document.createElement("p");
  let product_name= document.createElement("p");
  img.src = el.img;
  img.id="pimg"
   product_name.textContent= el.name;
   product_price.textContent= el.price;
   det.append(product_name, product_price);
   det.float="right"
   det.style.marginLeft="100px"
   det.style.marginTop="-80px"
  div.append(img,det)
  parent.append(div);

  
});
}


showProducts();












let m= JSON.parse(localStorage.getItem("temp_user_details"));
if(localStorage.getItem("temp_user_details")==null || m.length==0){
       
          var x = document.getElementById("lightBlue")
           x.style.display="flex"
}
      else{
          let details= JSON.parse(localStorage.getItem("temp_user_details"));
          var email = document.getElementById("eMail")
          var lname = document.getElementById("lname")
          var fname = document.getElementById("fname")
           fname.value= details.fName
           lname.value= details.lName
           email.value= details.email
         
          
      }
 
       function confirm(e){
         e.preventDefault();
      
         setTimeout(function(){
         window.location.href = "payment.html"; }, 500);
          }

         