


    
    //this function is sliding the title
    function titleMarquee() {
        var titleText = document.title;
        titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
        document.title = titleText;
       setTimeout("titleMarquee()", 450);
       }
      

       //this following function is pushing the data to cart object in local storage

       var data = 
      [ {
        name: "Marilyn High Waisted Skinny Jeans - Light Wash",
        color: "light-wash",
        productlink: "product.html",
        price: "$27.99",
        img: "https://cdn.shopify.com/s/files/1/0293/9277/products/MarilynHighWaistedSkinnyJeans-LightWash_MER_468x.jpg?v=1587588026",
        background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/MarilynHighWaistedSkinnyJeans-LightWash_MER_bba19deb-2873-40b2-9db7-6bdcf751f5ce_468x.jpg?v=1604518599"
      } ]

       if(localStorage.getItem("fashion_cart")===null){
         localStorage.setItem("fashion_cart", JSON.stringify([]));
        }
         //checking if we need to create the object in local storage from scratch or it already exist 
  
   if(localStorage.getItem("fashion_fav")===null){
    localStorage.setItem("fashion_fav", JSON.stringify([]));
   }
    
   function addtofav(data){
    var btn= document.getElementById("favB");
    btn.style.color="red";
    var heart= document.getElementById("heart");
      heart.style.color="red";
      let product_fav= JSON.parse(localStorage.getItem("fashion_fav"));
         product_fav.push(data[0]);
     localStorage.setItem("fashion_fav", JSON.stringify(product_fav));
    }
        
    
       function addtocart(data){
         //this is changing the color icon
         
         var bag= document.getElementById("shoppingbag")
         bag.style.color="white"
           let product_cart= JSON.parse(localStorage.getItem("fashion_cart"));
          product_cart.push(data[0]);
          localStorage.setItem("fashion_cart", JSON.stringify(product_cart));

         }
  
  
  
  // I get the following function from my teammate @balamurgan
  // this function slide the top banner
       let bannerdata = [
        "USE AFTERPAY TO BUY NOW & PAY LATER!",
        "$3 RUSH 1-DAY SHIPPING WITH PURCHASES OVER &100! US ONLY",
        "Track your order"
    ];

    let container = document.getElementById("sliding");
    startSlidshow();
    function startSlidshow() {
        
        let count = 0;

        let p = document.createElement("p");
        p.innerText = bannerdata[count];

        setInterval(function () {
            count++;
            container.innerHTML = null;
      

            if(count === bannerdata.length){
                count = 0;
            }
            p.innerText = bannerdata[count];
            container.append(p);
            
        },2000);

        
    }
     
  // This function is making the header fixed in the top for letting users to jump to any other page without scrolling all the way up
     window.onscroll = function() {myFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  
  
  
  
  // This loop is finding the current page of the document and changing the background color to grey(refer to active class in css)
  for (var i = 0; i < document.links.length; i++) {
      if (document.links[i].href == document.URL) {
          document.links[i].className = 'active';
      }
  }
      
     