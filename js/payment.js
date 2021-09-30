

     var out= document.getElementById("success")
    function confirm(e){
        e.preventDefault();
        //this will remove the temporary user fom the local storage to prevent autofilling the nextuser account with the current user
        localStorage.removeItem("temp_user_details");
        setTimeout(function(){
        out.textContent="Payment succesful!"; }, 2000);
        setTimeout(function(){
        window.location.href = "landingpage.html";; }, 4000);
         }

        
