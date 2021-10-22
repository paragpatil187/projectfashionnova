var count = 1;
var total = 0;

let data = [
    "USE AFTERPAY TO BUY NOW & PAY LATER!",
    "$3 RUSH 1-DAY SHIPPING WITH PURCHASES OVER &100! US ONLY",
    "Track your order"
];
//suggestion products list
var productsSug = [
    {
        img:"https://cdn.shopify.com/s/files/1/0293/9277/products/Product_1_1_360x.jpg?v=1631642559",
        title:"30% OFF! NO CODE NEEDED # PRICES AS MARKED",
        name:"Sparkle And Shine Rhinestone Bodystocking - Black",
        price:"300",
        innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0293/9277/products/08-13-21Studio5_SN_KJ_14-21-10_54_21JPS05CV26_Blackcombo_7063_KS_360x.jpg?v=1629408809",
        title:"30% OFF! NO CODE NEEDED # PRICES AS MARKED",
        name:"Basketball bunny Babe 5 Piece Costume Set - White/Blue",
        price:"400",
        innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0293/9277/products/08-24-21Studio5_MS_KP_14-48-10_50_21JPS053075_Orangecombo_4203_PLUS_PB.jpg?v=1629850310",
        title:"30% OFF! NO CODE NEEDED # PRICES AS MARKED",
        name:"Dragon Ninja 3 Piece Costume Set - Black/Red",
        price:"200",
        innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD"
    }
];

//recommended products list
var productsRecommend = [
    {
        img:"https://cdn.shopify.com/s/files/1/0293/9277/products/09-15-21Halloween_SN_16-51-19_LOOK_5_3427_PB_DM_PLUS.jpg?v=1631925248",
        title:"30% OFF! NO CODE NEEDED # PRICES AS MARKED",
        name:"Sparkle And Shine Rhinestone Bodystocking - Black",
        price:"700",
        innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0293/9277/products/06-22-20Studio3_CE_MJ_09-57-16_3_D4568A_Blush_P_0013_PLUS_NT.jpg?v=1592855451",
        title:"30% OFF! NO CODE NEEDED # PRICES AS MARKED",
        name:"Basketball bunny Babe 5 Piece Costume Set - White/Blue",
        price:"300",
        innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0293/9277/products/08-20-19_Studio_3_JP_EA_11-30-04_13_559604_WhiteBlue_P_PLUS_0720_NT_NT.jpg?v=1568334418",
        title:"30% OFF! NO CODE NEEDED # PRICES AS MARKED",
        name:"Dragon Ninja 3 Piece Costume Set - Black/Red",
        price:"600",
        innerH : "<span>   <strike>$69.99 USD</strike>  </span> $48.99 USD"
    }
];
    


let container = document.getElementById("sliding");
startSlidshow();
//***********************************************
var parentSug = document.getElementById("products");

if (localStorage.getItem("fashion_cart") === null) {
    localStorage.setItem("fashion_cart", JSON.stringify([]));
}

showprod(parentSug, productsSug)



function showprod(parent, list){
    
    
    // console.log("p",productsList)
    list.forEach(function(prod) {
        // console.log('prod:', prod)
        
        // console.log("parent", parent)
        let div = document.createElement("div");
        // div.setAttribute("id", "prod");
        div.setAttribute("class", "prod");

        div.innerHTML = null;

        let image = document.createElement("img");
        image.src = prod.img;
        // console.log('productsList[img]:', prod.img)
        image.setAttribute("class", "imgAnd");
        image.setAttribute("id","myImg");

        let div1 = document.createElement("div");
        div1.setAttribute("class", "details");
        div1.setAttribute("id","details");

        let p1 = document.createElement("p");
        p1.setAttribute("class", "redP");
        p1.setAttribute("id","redp");
        p1.innerText = prod.title;
        // console.log('productsList[title]:', prod.title)

        let p2 = document.createElement("p");
        p2.setAttribute("class", "blackP");
        p2.innerText = prod.name;
        
        let p3 = document.createElement("p");
        p3.setAttribute("class", "doller");
        // p3.innerText = prod.price;
        p3.innerHTML = prod.innerH;
        

        div1.append(p1,p2,p3);

        let btn = document.createElement("button");
        btn.innerText = "ADD TO BAG";

        btn.onclick = function(){
            addtoBag(prod);
        }
        // console.log("div",div)
        div.append(image,div1,btn);

        parent.append(div)
    });

    let my_products = JSON.parse(localStorage.getItem("fashion_cart"));

    if(my_products.length > 0){
        // console.log('my_products.length:', my_products.length)
        
        showfromBag();

    }
    
    
}

var parentRecommend = document.getElementById("productsRecommend");
showprod(parentRecommend, productsRecommend)

function startSlidshow() {
    
    let count = 0;

    let p = document.createElement("p");
    p.innerText = data[count];

    setInterval(function () {
        count++;
        container.innerHTML = null;
      

        if(count === data.length){
            count = 0;
        }
        p.innerText = data[count];
        container.append(p);
        
    },3000);
   
}




function addtoBag(prod) {
 
    // &&&&&&&&&&&&&&&& bala add this &&&&&&&&&&&&&&&&&&

    alert("Success fully added to the bag")

    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    
    // store in loacal storage
    let my_products = JSON.parse(localStorage.getItem("fashion_cart"));
    
    my_products.push(prod);

    localStorage.setItem("fashion_cart", JSON.stringify(my_products));
    showfromBag();
    total = 0;
}


function showfromBag(){       
    let upDiv = document.getElementById("upDiv");
    upDiv.style.display="flex";
    // upDiv.style.flex-direction="flex";

    let beforeCon = document.getElementById("beforeCon");
        beforeCon.innerHTML = null;

    let my_products = JSON.parse(localStorage.getItem("fashion_cart"));

    let div = document.getElementById("bagDivLeft"); 
        div.innerHTML = null;
        
    total = 0;

    
    

    my_products.forEach(function(prod) {
        let containBag = document.getElementById("bag");       
    
    //     let imgDetail = document.createElement('div');
    // imgDetail.innerHTML = '<div id="pricetag"> <div class="headings"> <p></p> <p>QUANTITY</p> <p>PRICE</p>  </div>  <div class="matter"> <div><p class="matterName"> name</p></div> <div> <input type="number"> <a href="">Remove</a> </div><div class="price"><p>blask</p> <p>USD</p> <p>Final Sale</p> <a href="">Move to Favorites</a> </div> </div><div class="sharecart">  <a href="">Share Your Cart</a> </div>  </div>';    


    let selectedProd = document.createElement("div");
    selectedProd.setAttribute("id", "selectedProd");
    
    
    let img = document.createElement("img");
    img.setAttribute("class", "selectedImg");
    img.src = prod.img;
    

    
    let imgDetail = document.createElement("div");
    imgDetail.setAttribute("class", "imgDetail");

        let nameDiv = document.createElement("div");
        nameDiv.setAttribute("class", "nameDiv");

        let nameda = document.createElement("p");
        // nameda.setAttribute("class", "prodName")
        nameda.innerText = prod.name;

        nameDiv.append(nameda);

    let quantityDiv = document.createElement("div");
    quantityDiv.setAttribute("class", "quantityDiv");

        let inputBox = document.createElement("input");
        inputBox.setAttribute("class", "inputDiv");
        inputBox.value="1";

        let aTag = document.createElement("p");
        aTag.setAttribute("class", "aTag");
        // aTag.innerHTML = '<button class="removeBtn"><u>Remove</u></button>';
        let removeBtn = document.createElement('button');
        removeBtn.setAttribute("class","removeBtn");
        removeBtn.innerText = "Remove";

        // &&&&&&&&&&&&&&& bala edit &&&&&&&&&&&&&&&&&&&&&
        removeBtn.onclick = ()=>{
            // alert("hai");
            selectedProd.remove();
            console.log(prod.img, prod.name)
            Remove_prod(prod.img, prod.name);
        }

        function Remove_prod(imgurl, product_name){

            let my_prod_for_del = JSON.parse(localStorage.getItem("fashion_cart"));            

            let temporary_list = [];

            my_prod_for_del.forEach( (pro) => {
            
                if(pro.img === imgurl){
                    console.log('pro:', pro)
                }else{
                    temporary_list.push(pro)
                    
                }
                // 

            } )

            console.log('temporary_list:', temporary_list)

            localStorage.setItem("fashion_cart", JSON.stringify( temporary_list ));

        }

        

        //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

        aTag.append(removeBtn)

    quantityDiv.append(inputBox,aTag);

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "priceDiv");
        let tem ="";
        tem = tem + "<strike><span>$</span>" + (Math.floor(+prod.price) + 15 + 0.99) +"<span>USD</span></strike>";
        let p1 = document.createElement("p");
        p1.innerHTML = tem;

        let p2 = document.createElement("p");
        p2.innerText = "$"+ (Math.floor( +prod.price)+ 0.99) + " USD";

        let p3 = document.createElement("p");
        p3.innerText="Final Price";

        let apriceTag = document.createElement("p");
        apriceTag.setAttribute("class", "aTag");

        let sendtoFav = document.createElement('button');
        sendtoFav.setAttribute("class","removeBtn");
        sendtoFav.innerText = "Send to Favorite";

        sendtoFav.onclick = function(){
           
        }
        // apriceTag.innerHTML = '<button id="rmvBtn" class="removeBtn"><u>Sent to Favorite</u></button>';
        apriceTag.append(sendtoFav)

        priceDiv.append(p1,p2,p3,apriceTag);

        
        imgDetail.append(nameDiv,quantityDiv,priceDiv)
        // let removeElement = document.getElementById("rmvBtn");
        // console.log('removeElement:', removeElement)
    

    selectedProd.append(img,imgDetail);
    
    
    div.append(selectedProd)

    

    let subtotal = document.getElementById("subTotal");
    subtotal.innerText =  my_products.length + " items";

    total += +(prod.price);

    var obj={}
    obj.totalprice= total;
    if(localStorage.getItem("total")===null){
            localStorage.setItem("total",JSON.stringify([]))
    }
    
    localStorage.setItem("total", JSON.stringify(obj))
    

   
    
    // console.log('total:', total)
    
    
    let sum = document.getElementById("sum");
    sum.innerText = "$ " + (Math.floor(total)+0.98) + " USD";

    

    
    if(count == 1){            
        let bagDivRight = document.getElementById("container");
        
        // console.log('bagDivRight:', bagDivRight.style)
        bagDivRight.style.display = "block";
    }
    count++;
    // containBag.append(div);
  });
 
    //make div

    
}



var favData = JSON.parse(localStorage.getItem("fashion_fav"))
if( favData!==null && favData.length!==0){
    
    let parent= document.getElementById("favP")
    let fav= JSON.parse(localStorage.getItem("fashion_fav"));
    let flabel = document.getElementById("flabel")
    

    function showF(){
   
     fav.forEach(function (el){
        flabel.style.display="grid";

     let div= document.createElement("div");
     let img= document.createElement("img");
     let product_price= document.createElement("p");
     let product_name= document.createElement("p");
     img.src = el.img;
     product_name.textContent= el.name;
     product_price.textContent= "$" + Math.floor(el.price) + " USD";
    let add_button= document.createElement("button")
     add_button.innerText= "ADD TO BAG";
      add_button.onclick = function(){
        addtoBag(el);
       };
     div.append(img, product_name, product_price,add_button)
     parent.append(div);
    
       
    });
 }

         showF();

}
function validate(){
var code = document.getElementById("discount");
var out = document.getElementById("confirmation")
if(code.value=="masai50"){
  out.textContent= "50% discount";
  out.style.color="green";
  let sum = document.getElementById("sum");
    sum.innerText = "$ " + Math.floor((1/2)* +total) + " USD";
    var obj={}
    obj.totalprice= (Math.floor((1/2)*+total));
    localStorage.setItem("total", JSON.stringify(obj))


}

else{
  out.textContent="Invalid Code"
  out.style.color="red";
}
}


function removeitems(){
    localStorage.removeItem("fashion_cart");
    window.location.href="shopingBag.html"
    let x= document.getElementById("rmvbtn");
    x.style.color="white";

}