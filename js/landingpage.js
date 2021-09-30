


    
    //this function is sliding the title
     function titleMarquee() {
      var titleText = document.title;
      titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
      document.title = titleText;
     setTimeout("titleMarquee()", 450);
     }




     let favouriteData = [
    {
      name: "Dragon Ninja 3 Piece Costume Set - Black/Red",
      color: "light-wash",
      price: "$41.99",
      productlink:"#",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-11-20Studio1_MS_DOM_15-16-02_11_85401_BlackRed_0116_JK_468x.jpg?v=1599864927",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-09-20Studio3_AP_SA_09-19-21_7_85401_BlackRed_P_0580_PLUS_WG_468x.jpg?v=1599671713"
    },
    {
      name: "Basketball Bunny Babe 5 Piece Costume Set - White/Blue",
      color: " White/Blue",
     price: "$48.99",
     productlink:"#",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-20-19_Studio_2_MA_AG_11-04-33_5_559604_WhiteBlue_P_4115_JD_WG_468x.jpg?v=1568334418",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-20-19_Studio_2_MA_AG_11-07-42_5_559604_WhiteBlue_P_4159_JD_dc2a75eb-42e7-4026-92f0-75e52c981d47_468x.jpg?v=1568334418"
    },
    {
      name: "Keep Your Shine Sequin Mini Dress - Blush",
      color: "Red",
      price: "$29.99",
      productlink:"#",
      fav: "	&#xf004;",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/Don_tDoubtMeMidiDress-Red_MER_c024357f-b502-4ce0-b6f5-eec97a202886_468x.jpg?v=1618945842",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-26-19_Studio_2_DV_KYS_10-16-50_6__KSD1575_Red_P_29868_WG_468x.jpg?v=1569961071"
    },
    {
      name: "Flex Game Strong High Rise Skinny Jeans-Dark",
      color: "Blue",
      price: "$34.99",
      productlink:"#",
      fav: "	&#xf004;",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/FlexGameStrongHighRiseSkinnyJeans-DarkBlueWash_MER_468x.jpg?v=1591136753",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/06-26-19_Studio_1_DV_11-21-18_7__FNF8180HR_DarkWash_3596_JD_468x.jpg?v=1568680386"
    },
]
     let trendinginData = [
    {
      name: "Marilyn High Waisted Skinny Jeans - Light Wash",
      color: "light-wash",
      productlink: "product.html",
      price: "$27.99",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/MarilynHighWaistedSkinnyJeans-LightWash_MER_468x.jpg?v=1587588026",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/MarilynHighWaistedSkinnyJeans-LightWash_MER_bba19deb-2873-40b2-9db7-6bdcf751f5ce_468x.jpg?v=1604518599"
    },
    {
      name: "Franchesca Fur Jacket - Black",
      color: "Black",
      productlink:"#",
      
      price: "$64.99",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/Franchesca_Fur_Jacket_-_Black_1_360x.jpg?v=1615419696",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_07-19-17-357_468x.jpg?v=1568669584"
    },
    {
      name: "Kallan Knit Dress - Black",
      color: "Black",
      price: "$26.99",
      productlink:"#",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/KallanKnitDress-Black_MER_468x.jpg?v=1585952721",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_07-18-17-070_468x.jpg?v=1568669548"
    },
    {
      name: "Flex Game Strong High Rise Skinny Jeans-Dark",
      color: "Dark",
      price: "$33.99",
      productlink:"product.html",
      img: "https://cdn.shopify.com/s/files/1/0293/9277/products/KeepYourShineSequinMiniDress-Blush_MER_468x.jpg?v=1602868940",
      background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/06-17-20Studio2_MS_SD_13-39-41_42_D4568A_Blush_4722_WG_468x.jpg?v=1592430583"
    },
]
function  showFavouriteProducts(){
    favouriteData.forEach(function (el){
        let parent = document.getElementById("favoriteProducts")
         let div= document.createElement("div");
         let img= document.createElement("img");
         let product_price= document.createElement("p");
         let product_name= document.createElement("p");
         img.src = el.img;
         img.onclick= function(){
          window.location.href = el.productlink;
         }
      
         div.style.paddingBottom="18px";
        product_name.textContent= el.name;
         product_price.textContent= el.price;
         let add_button= document.createElement("button")
         let fav_button= document.createElement("button")
         fav_button.textContent=  "Favourites";
         add_button.style.height="50px"
          fav_button.style.border="3px solid black"
         fav_button.style.width="51%"
         fav_button.style.height="40px"
         fav_button.style.float="right" 
         fav_button.style.marginTop="-50px"
         fav_button.style.marginRight="20px"
          fav_button.style.backgroundColor="red"
         fav_button.style.color="white"
         fav_button.onclick = function(){
          
          addtofav(el);
        }
         

      
      
        
         add_button.innerText= "Add to cart";
         add_button.onclick = function(){
          
             addtoCart(el);
           }
          
         div.append(img, product_name, product_price, fav_button, add_button)
         parent.append(div);
        });
   }

function showTrendProducts(){
    trendinginData.forEach(function (el){
          let parent = document.getElementById("trendingProducts")
          let x = document.getElementById("heart")
         let div= document.createElement("div");
         let img= document.createElement("img");
         let product_price= document.createElement("p");
         let product_name= document.createElement("p");
         img.src = el.img;
         // on clicking get the product description page
         img.onclick= function(){
          window.location.href = el.productlink;
         }
          div.style.paddingBottom="18px";
         product_name.textContent= el.name;
         product_price.textContent= el.price;
         let add_button= document.createElement("button")
         let fav_button= document.createElement("button")
         fav_button.textContent=  "Favourites";
         fav_button.style.border="3px solid black"
         fav_button.style.width="51%"
         fav_button.style.height="40px"
         fav_button.style.float="right" 
         fav_button.style.marginTop="-50px"
         fav_button.style.marginRight="20px"
         fav_button.style.backgroundColor="red"
         fav_button.style.color="white"
         add_button.style.height="50px"
         fav_button.onclick = function(){
          
          addtofav(el);
        }

         add_button.innerText= "Add to cart";
         add_button.onclick = function(){
          
             addtoCart(el);
           }
          
         div.append(img, product_name, product_price, fav_button, add_button)
         parent.append(div);
        });
   }

   showTrendProducts()
   showFavouriteProducts()

   
   //checking if we need to create the object in local storage from scratch or it already exist 
  
   if(localStorage.getItem("fashion_fav")===null){
     localStorage.setItem("fashion_fav", JSON.stringify([]));
   }
   if(localStorage.getItem("fashion_cart")===null){
    localStorage.setItem("fashion_cart", JSON.stringify([]));
  }
 // this function is pushing cart items to cart object
   function addtoCart(el){
     var bag= document.getElementById("shoppingbag")
      bag.style.color="white"
         let product_cart= JSON.parse(localStorage.getItem("fashion_cart"));
              product_cart.push(el);
      localStorage.setItem("fashion_cart", JSON.stringify(product_cart));
  }
  //this function is pushing fav to the fav object
  
   function addtofav(el){
   var heart= document.getElementById("heart");
     heart.style.color="red";
     let product_fav= JSON.parse(localStorage.getItem("fashion_fav"));
        product_fav.push(el);
    localStorage.setItem("fashion_fav", JSON.stringify(product_fav));
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
    
   