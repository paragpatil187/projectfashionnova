if(localStorage.getItem("temp_user_details")==null){
       
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