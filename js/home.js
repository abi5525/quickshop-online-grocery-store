let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header-2");

menu.addEventListener("click", () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})


window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 150){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }

}


var id , itemName, category, quantity, price, rate,inputFile;
   

var total,  out1, box, fruits, veg,  beverages, snacks, meat, stationary;
var  p1, p2, p3, p4, p5, p6, para, button, card_container, Form, button, card, img1, img2, img3, img4, img5, img6, img7;
var error1, card_none, d_none, row, cell1, cell2, cell3, cell4, cell5, cell6,  table, row; 
var productContainer, productImage, productCard, imgURL;

var totalArray=[];

let products = [];
var product ={};

let products1 = [];
var product1 ={};

var i=0;

function addItem(event){


    event.preventDefault();
  
   id = document.getElementById("idNumber").value;
   itemName =  document.getElementById("itemName").value;
   quantity =  document.getElementById("quantity").value;
   rate = document.getElementById("rate").value;
   total = quantity * rate;
   category =document.getElementById("category").value
   fruits = document.getElementById("fruits").value;
   veg = document.getElementById("veg").value;
   beverages = document.getElementById("beverages").value;
   snacks = document.getElementById("snacks").value;
   stationary = document.getElementById("stationary").value;
   meat = document.getElementById("meat").value;
   card_none = document.getElementById("card-none");
   inputFile = document.getElementById("file").files[0];



// -----------------------------------------

    if(category=="Select Your Category"){
      category=null;
    }
    else{
      category=category;
    }


//--------------------------------------------- 


  
  // if(itemName.length>0 & id.length>0 & category.length>0 & quantity.length>0 & rate.length>0){
   
  //   totalArray[i] =total;

  //   i++;
  // }

  
// ------------------------------- 

if(itemName.length>0 & id.length>0 & category.length>0 & quantity.length>0 & rate.length>0){
product = {
name: itemName,
price: rate,
image: inputFile,
category:category,
id:id,
quantity:quantity,
total:total,
a:1,
};
}

products.push(product);
//----------------------------------------


if(itemName.length>0 & id.length>0 & category.length>0 & quantity.length>0 & rate.length>0){
product1 = {
  name: itemName,
  price: rate,
  image: inputFile,
  category:category,
  id:id,
  quantity:quantity,
  total:total,
  a:1,
};
}

products1.push(product1);


//--------------------------------------------------
    
  
   img1 = document.createElement('img');
   img1.src="./images/fruit.png";
   img1.classList.add('iconsize');

   img2 = document.createElement('img');
   img2.src="./images/vegetable.png";
   img2.classList.add('iconsize');

   img3 = document.createElement('img');
   img3.src="./images/fish2.png";
   img3.classList.add('iconsize');

   img4 = document.createElement('img');
   img4.src="./images/chicken-leg.png";
   img4.classList.add('iconsize');

   img5 = document.createElement('img');
   img5.src="./images/drinks.png";
   img5.classList.add('iconsize');

   img6 = document.createElement('img');
   img6.src="./images/snack3.png";
   img6.classList.add('iconsize');

   img7 = document.createElement('img');
   img7.src="./images/stationary2.png";
   img7.classList.add('iconsize');



// -------------------------------     
    

    card_container = document.getElementById("card");

    box = document.createElement('div');
    box.classList.add('card-style');
    card_container.appendChild(box);

    
// ------------------------------- 

    if(category==fruits){
      box.appendChild(img1);
    }

    else if(category==veg){
      box.appendChild(img2);
    }

    else if(category==meat){
      box.appendChild(img3);
    }

    else if(category==beverages){
      box.appendChild(img5);
    }

    else if(category==snacks){
      box.appendChild(img6);
    }

    else{
      box.appendChild(img7);
    }


// -------------------------------   



    
    p1 = document.createElement("p");
    p1.innerText= "#"+id +" " + "-" +" " + itemName ;
    box.appendChild(p1);
    p1.classList.add('card-heading');

    p2 = document.createElement("p");
    p2.innerText = "Rate:"+" "+"₹"+rate+"/Kg"+" "+"|"+" "+"Quantity:"+" "+quantity+"Kg";
    box.appendChild(p2);
    p2.classList.add('card-content');
    


// -------------------------------      

    if(quantity<=10){
        box.style ="border:2px solid red; background-color: #fff;" 
      }
  
      else if(quantity>10 & quantity<=30){
        box.style ="border:2px solid #ffff33; background-color:#fff;"
      }
       
      else{
        box.style ="border:2px solid rgb(0, 255, 0); background-color: #fff"
      }


// -------------------------------


      if(p1.innerHTML==" " || p1.innerHTML== null){
        card_none.style.display="block";
      }
       
      else{
        card_none.style.display="none";
       }


// -------------------------------


      
    document.getElementById("form").reset();

    
  }




// cart section starts


  





function toggleDiv() {
  let div = document.getElementById('cart');

  
  if (div.style.display === 'none') {
      div.style.display = 'initial'; // Show the div
      setTimeout(function() {
          div.style.opacity = '1'; // After changing display to block, fade in the div
      }, 50); // A small delay to ensure the transition takes place smoothly
  } else {
      div.style.opacity = '0'; // Fade out the div
      setTimeout(function() {
          div.style.display = 'none'; // After fading out, change display to none
      }, 300); // Duration should match the transition duration
  }
}


function closeCart(){
  let div = document.getElementById('cart');

  div.style.display = "none";
}



// cart section ends





// table section starts


function showItem(){
  

  if(itemName.length>0){

    table = document.getElementById('myTable');

    table.style.textTransform="capitalize"

    

    for(var j=0; j<products1.length; j++){
      row = table.insertRow(j+1);
      row.insertCell(0).innerHTML =products1[j].id;
      row.insertCell(1).innerHTML =products1[j].name;
      row.insertCell(2).innerHTML =products1[j].category;
      row.insertCell(3).innerHTML =products1[j].quantity;
      row.insertCell(4).innerHTML =products1[j].price;
      row.insertCell(5).innerHTML =products1[j].total;

      
    }

  //--------------------------------------

    
    var div = document.getElementById("tableError");

    div.style.display ="none";

    // -------------------------------------

                 
  }

   products1.length = 0;
}



// table section ends





// update products section starts

let basket = [];

function createProductCard(product) {
  const productDisplay = document.getElementById('prodPlace');
  
  const card = document.createElement('div');
  card.classList.add('product-box');
  
  const image = document.createElement('img');
  image.src = URL.createObjectURL(product.image);

  
  
  card.innerHTML += `
  <img src="${image.src}" alt="">
  <strong>${product.name}</strong>
  <span class="quantity">1 kg</span>
  <span class="price">₹${product.price}</span>

  <div class="buttons">
  <i onclick="decrement(${product.id})" class="fa-solid fa-minus minus"></i>
  <div id=${product.id} class="quant">1</div>
  <i onclick="increment(${product.id})" class="fa-solid fa-plus plus"></i>
  </div>

  <button class="cart-btn" onclick="addToCart(${products.indexOf(product)},${product.id})">
      <i class="fas fa-shopping-bag"></i> Add to cart
  </button>
  `;

  
  productDisplay.appendChild(card);
}


///----------------------------------------

function increment(id){

  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if(search === undefined ){
    basket.push({
      id:selectedItem,
      item1:1,
    })
  }
  else{
    search.item1 += 1;
  }

  console.log(basket);
  update(selectedItem);
  
}

//----------------------------------------

function decrement(id){
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if(search.item1 === 0 ){
    return;
  }
  else{
    search.item1 -= 1;
  }

  console.log(basket);
  update(selectedItem);
  
}

//------------------------------------------------

function update(id){
  let search = basket.find((x)=>x.id ===id);
  document.getElementById(id).innerHTML = search.item1;

  console.log(search.item1);
  
  calculation();
}


//----------------------------------------------


function calculation(){
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=> x.item1).reduce((x,y) => x + y,0);
}


///------------------------------------------------



//-------------------------------------------------


function buyItem(){


  let prodDiv = document.getElementById("productContainer");
  for(var k=0; k<products.length; k++){
    createProductCard(products[k]);
  }

  if(products.length!=0){
    prodDiv.style.display = "none";
  }

}

// update products section ends



// cart section starts



const cartItemsArray = [];
function addToCart(index,id) {

  const selectedProduct = products[index];
  let cartContainer = document.getElementById("cartContainer");

  let selectedItem = id;
  let search = basket.find((x)=>x.id ===selectedItem);
  console.log(search.item1);
  
  
  // Check if the product is already in the cart
  const existingCartItem = Array.from(cartContainer.getElementsByClassName('cartItems')).find(item => {
    return item.dataset.productId === selectedProduct.id;
  });

  if (existingCartItem) {
    alert("Item Already In Cart");
  } else {

    // If the product is not in the cart, create a new cart item
    const image1 = document.createElement('img');
    image1.src = URL.createObjectURL(selectedProduct.image);

    let cartItem = document.createElement('div');
    cartItem.classList.add('cartItems');
    cartItem.setAttribute('data-product-id', selectedProduct.id);

    cartItem.innerHTML = `
      <img src=${image1.src} alt="">
      <h3>${selectedProduct.name}</h3>
      <h3>₹ ${selectedProduct.price*search.item1}</h3>
      <h3 class="quantity" id="cartQuant">${search.item1}</h3>
      <button class="close" onclick="deleteItem(this,${selectedItem})"> <i class="fa-solid fa-trash-can trash" style="color: #ffffff;"></i> </button>
    `;

    cartContainer.appendChild(cartItem);
    alert("Item Added To Cart");
  
  }

}


// function deleteItem(item,id) {
//   let cartItem = item.parentElement;
//   cartItem.remove();
//   // let search = basket.find((x)=>x.id ===id);
//   // search.item1 = 0;
//   // update(id);
// }




// cart section ends