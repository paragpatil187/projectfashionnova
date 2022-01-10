


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
   product_price.textContent= "$" + el.price +" USD";
   det.append(product_name, product_price);
   det.float="right"
   det.style.marginLeft="100px"
   det.style.marginTop="-80px"
  div.append(img,det)
  parent.append(div);

  
});
}


showProducts();


    
    
    
    
    
    var out= document.getElementById("success")
    function confirm(e){
        e.preventDefault();
        //this will remove the temporary user fom the local storage to prevent autofilling the nextuser account with the current user
        
        localStorage.removeItem("fashion_cart");
        localStorage.removeItem("fashion_fav");
        localStorage.removeItem("temp_user_details");
        setTimeout(function(){
        out.textContent="Payment succesful!"; }, 2000);
        setTimeout(function(){
        window.location.href = "index.html";; }, 4000);
         }



       

         let m= JSON.parse(localStorage.getItem("temp_user_details"));
            if(localStorage.getItem("temp_user_details")==null || m.length==0){
       
           console.log("yes")
           }
      else{
        let details= JSON.parse(localStorage.getItem("temp_user_details"));
        var nam= document.getElementById("name")
        var user_name=  details.fName + " " + details.lName
        user_name=user_name.toUpperCase()
        nam.value= user_name;
         
          
      }

      let total= JSON.parse(localStorage.getItem("total"));
var totalprice = document.getElementById("totalamount")
totalprice.textContent= "Total price: $" + Math.floor(total.totalprice) + " USD";
         

        
