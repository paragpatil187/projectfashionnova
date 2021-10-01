

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
        window.location.href = "landingpage.html";; }, 4000);
         }

         if(localStorage.getItem("temp_user_details")!==null){
            let details= JSON.parse(localStorage.getItem("temp_user_details"));
               var nam= document.getElementById("name")
               var user_name=  details.fName + " " + details.lName
               user_name=user_name.toUpperCase()
               nam.value= user_name
         }
         

        
