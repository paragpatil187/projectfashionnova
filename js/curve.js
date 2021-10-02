 // this function is sliding the title
 function titleMarquee() {
    var titleText = document.title;
    titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
    document.title = titleText;
   setTimeout("titleMarquee()", 450);
   }




   let favouriteData = [
  {
    name: "You Better Behave Costume - Navy Blue",
    color: "black",
    price: "41.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-17-18_Studio_1_10-05-05_556501_Navy_0201_NT_468x.jpg?v=1568664329",
  
  },
  {
    name: "Texas Star Cheerleader 5 Piece Costume Set",
    color: "Blue",
   price: "48.99",
   title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-17-21Studio3_MS_JH_10-11-14_6_5008_WhiteBlue_P_0148_PLUS_KL_468x.jpg?v=1629310006",
    
  },
  {
    name: "Let's Play Games 2 Piece Costume Set - White",
    color: "White",
    price: "48.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/Let_sPlayGameCostume-White_2__MER_PLUS.jpg?v=1602547690",
    
  },
  {
    name: "Infinite And Beyond 6 Piece Costume Set",
    color: "Green",
    price: "34.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-20-19_Studio_3_JP_EA_10-05-58_6__559607_Greencombo_R_PLUS_0615_KL.jpg?v=1568681839",
    
  },
  {
    name: "Dragon Ninja 3 Piece Costume Set - Black/Blue",
    color: "Blue",
    price: "41.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-08-21Studio2_CE_KP_14-39-18_56_85401_BlackBlue_1166_PLUS_DC_468x.jpg?v=1631552676",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-04-21Studio2_ME_RL_13-39-47_23_85401_BlackBlue_3872_EH_468x.jpg?v=1628634310",
    productlink:"#",
  },
  {
    name: "Hell High Cheerleader 3 Piece Costume Set - Red/combo",
    color: "Red",
    price: "43.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-17-21Studio3_MS_JH_10-32-38_9_PK2102_Redcombo_0202_PLUS_KL.jpg?v=1629310110",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-17-21Studio3_MS_JH_10-32-01_9_PK2102_Redcombo_0191_PLUS_KL.jpg?v=1629310109",
    productlink:"#",
  },
  {
    name: "Red Haute Storybook Costume Set",
    color: "Red",
    price: "79.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/RedHauteStorybookCostume-Red_MER_PLUS_468x.jpg?v=1602547546",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_09-22-17_Studio_2-4958_468x.jpg?v=1568669532",
    productlink:"#",
  },
  {
    name: "The Caged Queen 2 Piece Costume Set - Red/combo",
    color: "Red",
    price: "97.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-17-21Studio3_CE_10-50-21_1_PK2150_Redcombo_P_0133_PLUS_PB_468x.jpg?v=1631910480",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-15-21Halloween_SN_17-53-55_LOOK_7_3581_WG_DM_468x.jpg?v=1631925526",
    productlink:"#",
  },
]
   let trendinginData = [
  {
    name: "Bride To Be 6 Piece Of Costume Set - Red ",
    color: "Red",
    price: "27.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-09-20Studio3_AP_SA_10-13-40_12_559616_Red_P_0645_PLUS_WG_468x.jpg?v=1599680709",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-09-20Studio3_AP_SA_10-13-48_12_559616_Red_P_0650_PLUS_WG_468x.jpg?v=1599680710",
  },
  {
    name: "Wild West Cowgirl 3 Piece Costume Set",
    color: "Black",
    price: "62.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-11-20Studio2_RM_CP_11-29-58_5_550341_Black_7203_NT_468x.jpg?v=1599854768",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-11-20Studio2_RM_CP_11-34-11_5_550341_Black_7248_NT_468x.jpg?v=1599854768"
  },
  {
    name: "Power Of The Moon 4 Piece Costume Set",
    color: "White",
    price: "26.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-04-21Studio2_ME_RL_10-52-12_10_S9018_Whitecombo_3668_EH_468x.jpg?v=1628633887",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-04-21Studio2_ME_RL_10-52-12_10_S9018_Whitecombo_3668_EH_468x.jpg?v=1628633887"
  },
  {
    name: "South Side Cowgirl 5 Piece Costume Set - Red",
    color: "Red",
    price: "33.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/SouthSideCowgirl5PieceCostumeSet-Red_MER_468x.jpg?v=1632871660",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-15-21Halloween_SN_12-32-23__GROUP_2772_DC_DM_468x.jpg?v=1631925865"
  },
  {
    name: "Ooooh The Claw 4 Piece Costume Set - Blue",
    color: "Blue",
    price: "55.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-21-19_Content_DV_12-51-28_Halloween_11901_RG_RG_468x.jpg?v=1568681840",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/08-20-19_Studio_2_MA_AG_13-35-57_9_559609_Blue_4297_JD_468x.jpg?v=1568681840",
    productlink:"#",
  },
  {
    name: "Medusa Maiden 2 Piece Costume Set - Teal/combo",
    color: "Teal",
    price: "72.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/MedusaMaiden2PieceCostumeSet-Tealcombo_MER_468x.jpg?v=1602808390",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/09-10-20_CE_20-29-19_Awakening_0143_RG_468x.jpg?v=1600727855",
    productlink:"#",
  },
  {
    name: "Malaya Latex Jumpsuit 1 Piece - Honey",
    color: "Honey",
    price: "135.99",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/02-12-21Studio6_CE_KK_10-36-00_1_A58233_Honey_0772_EH_468x.jpg?v=1613598454",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/02-12-21Studio6_CE_KK_10-40-21_1_A58233_Honey_0804_EH_468x.jpg?v=1613598453",
    productlink:"#",
  },
  {
    name: "Mila Mirrored Gown - Nude/combo",
    color: "White",
    price: "294",
    title:"30% OFF! NO CODE NEEDED",
       innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD",
    img: "https://cdn.shopify.com/s/files/1/0293/9277/products/MilaMirroredGown-Nudecombo_MER_468x.jpg?v=1621875035",
    background_img: "https://cdn.shopify.com/s/files/1/0293/9277/products/11-18-20Luxe_JP_15-23-36_26_LD296_Nudecombo_0875_RG_468x.jpg?v=1606244950",
    productlink:"#",
  },
]
function  showFavouriteProducts(){
let parent = document.getElementById("favoriteProducts")
parent.innerHTML=null;
favouriteData.forEach(function (el){
      let x=document.getElementById("heart")
       let div= document.createElement("div");
       let img= document.createElement("img");
       let product_title= document.createElement("p");
       let product_price= document.createElement("p");
       let product_name= document.createElement("p");
       img.src = el.img;
       // on clicking get the product description page
       img.onclick= function(){
        window.location.href = el.productlink;
       }
        div.style.paddingBottom="18px";
       product_name.textContent= el.name;
       product_title.textContent=el.title;
       product_title.style.color="red";
       product_price.innerHTML= el.innerH;
      


       let add_button= document.createElement("button")
       let fav_button= document.createElement("button")
       fav_button.textContent=  "❤";
       add_button.style.height="50px"
       
       fav_button.style.border="none"
       fav_button.style.width="10%"
       fav_button.style.height="40px"
       fav_button.style.float="right"
       fav_button.id="favheartbtn"
       
      /* fav_button.style.marginTop="-50px"
       fav_button.style.marginRight="20px"*/

       

       fav_button.style.background="none"
       fav_button.style.color="green"
       add_button.style.height="50px"
       var c=0;
       
       fav_button.onclick = function(){
         
        if(c%2==0){ fav_button.style.color="red";}
        else{
          fav_button.style.color="blue"
        
        }
        c++;
        
        addtofav(el);
      }
       

    
    
      
       add_button.innerText= "Add to cart";
       add_button.onclick = function(){
        
           addtoCart(el);
         }
        
       div.append(img, product_title, product_name, product_price, fav_button, add_button)
       parent.append(div);
      });
 }

function showTrendProducts(){
let parent = document.getElementById("trendingProducts")
     parent.innerHTML=null;
     trendinginData.forEach(function (el){
      
    let x = document.getElementById("heart")
       let div= document.createElement("div");
       let img= document.createElement("img");
       let product_title= document.createElement("p");
       let product_price= document.createElement("p");
       let product_name= document.createElement("p");
       img.src = el.img;
       // on clicking get the product description page
       img.onclick= function(){
        window.location.href = el.productlink;
       }
        div.style.paddingBottom="18px";
       product_name.textContent= el.name;
       product_title.textContent=el.title;
       product_title.style.color="red";
       product_price.innerHTML= el.innerH;
      


       let add_button= document.createElement("button")
       let fav_button= document.createElement("button")
       fav_button.textContent=  "❤";
       add_button.style.height="40px"
       add_button.style.marginBottom="30x"
       
       fav_button.style.border="none"
       fav_button.style.width="10%"

       fav_button.style.height="40px"
       fav_button.style.float="right"
       fav_button.id="favheartbtn"
       /*fav_button.style.marginTop="-50px"
       fav_button.style.marginRight="20px"*/

       fav_button.style.background="none"
       fav_button.style.color="green"
       add_button.style.height="50px"
       let c2=0;
       fav_button.onclick = function(){
        if(c2%2==0){ fav_button.style.color="red";}
        else{
          fav_button.style.color="blue"
        
        }
        c2++;
        
        addtofav(el);
      }
       

    
    
      
       add_button.innerText= "Add to cart";
       add_button.onclick = function(){
        
           addtoCart(el);
         }
        
       div.append(img, product_title, product_name,product_price, fav_button, add_button)
       parent.append(div);
      });
 }

 showTrendProducts()
 showFavouriteProducts()
 if(localStorage.getItem("fashion_cart")===null){
   localStorage.setItem("fashion_cart", JSON.stringify([]));
 }
 if(localStorage.getItem("fashion_fav")===null){
   localStorage.setItem("fashion_fav", JSON.stringify([]));
 }

 
 let my_products = JSON.parse(localStorage.getItem("fashion_cart"));

 if(my_products.length > 0){
  var bag= document.getElementById("shoppingbag");
  bag.style.color="white";
 }
 let my_favourites = JSON.parse(localStorage.getItem("fashion_fav"));
 
 if(my_favourites.length > 0){
  
   var heart= document.getElementById("heart");
   heart.style.color="red";
 }






 function addtoCart(el){
    
       
       let product_cart= JSON.parse(localStorage.getItem("fashion_cart"));
       var bag= document.getElementById("shoppingbag");
       bag.style.color="white";
     
      
       
      
       product_cart.push(el);
       
      
       localStorage.setItem("fashion_cart", JSON.stringify(product_cart));
      // console.log(fashion_cart)
      }


 function addtofav(el){
   
   let product_fav= JSON.parse(localStorage.getItem("fashion_fav"));
   var heart= document.getElementById("heart");
   heart.style.color="red";
  
       
      
      product_fav.push(el);
      
     
      localStorage.setItem("fashion_fav", JSON.stringify(product_fav));
      
     }

 
// This function is making the header fixed in the top for letting users to jump to any other page without scrolling all the way up
/*  window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}*/




// This loop is finding the current page of the document and changing the background color to grey(refer to active class in css)
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href == document.URL) {
      document.links[i].className = 'active';
  }
}
function sortLH(){
 let arr=trendinginData.sort(function(a,b){
   return a.price-b.price;

 });
 showTrendProducts(arr);
 var lh = document.getElementById("lowhigh")
 var hl = document.getElementById("highlow")
 lh.style.display ="none";
 hl.style.display="block";
}




function sortHL(){
 let arr=trendinginData.sort(function(a,b){
   return b.price-a.price;

 });
 showTrendProducts(arr);
 var lh = document.getElementById("lowhigh")
 var hl = document.getElementById("highlow")
 lh.style.display ="block";
 hl.style.display="none";
 
}
function sortLH1(){
 let arr=favouriteData.sort(function(a,b){
   return a.price-b.price;

 });
 showFavouriteProducts(arr);
 var lh1 = document.getElementById("lowhigh1")
 var hl1 = document.getElementById("highlow1")
 lh1.style.display ="none";
 hl1.style.display="block";
 
}




function sortHL1(){
 let arr=favouriteData.sort(function(a,b){
   return b.price-a.price;

 });
 showFavouriteProducts(arr);
 var lh1 = document.getElementById("lowhigh1")
 var hl1 = document.getElementById("highlow1")
 hl1.style.display ="none";
 lh1.style.display="block";

}

let my_user = JSON.parse(localStorage.getItem("temp_user_details"));


 if(my_user.length==undefined){
   let user= document.getElementById("user");
   user.style.color="white";
   user.title="Sign out"
   user.onclick= function(){
    localStorage.removeItem("temp_user_details");
   }


   }