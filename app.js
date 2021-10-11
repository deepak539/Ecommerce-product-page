const menuBtn = document.getElementById("menu-btn");
const cart = document.getElementById("cart");
const addItem = document.getElementById("plus");
const removeItem = document.getElementById("minus");
const countItem = document.getElementById("item-count");
const addToCart = document.getElementById("add");
const cartCard = document.getElementById("cart-card");
const thumbnails = document.querySelectorAll('.thumbnail');
const productImage = document.getElementById('pii');
const previousImg = document.getElementById('previous');
const nextImg = document.getElementById('next');

let count = 0;
let imgNo = 1;
const imgUrl = './images/image-product-'

menuBtn.addEventListener("click", () => {
  const imageUrl = menuBtn.attributes.src.value;
  const navList = document.getElementById("navlist");
  if (imageUrl === "./images/icon-menu.svg") {
    menuBtn.attributes.src.value = "./images/icon-close.svg";
    navList.classList.add("mobile-navlist");
    navList.classList.remove("navlist");
  } else {
    menuBtn.attributes.src.value = "./images/icon-menu.svg";
    navList.classList.add("navlist");
    navList.classList.remove("mobile-navlist");
  }
});

cart.addEventListener("click", () => {
  const card = document.querySelector(".card");
  const cardStyles = getComputedStyle(card);
  if (cardStyles.display === "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});

addItem.addEventListener("click", () => {
  count++;
  countItem.innerText = count;
});

removeItem.addEventListener("click", () => {
  if (count >= 1) {
    count--;
    countItem.innerText = count;
  } else {
    alert("Please add an item first");
  }
});

addToCart.addEventListener("click", () => {
  const cartItems = document.getElementById("number-of-items");
  cartItems.innerText = countItem.innerText;
  const price = countItem.innerText * 125;
  if (cartItems.innerText >= 1) {
    cartCard.classList.add("cartfilled");
    cartCard.classList.remove("cartempty");
    cartCard.innerHTML = `<div class="card-info" id="card-info">
    <img
      src="./images/image-product-1-thumbnail.jpg"
      alt="thumbnail"
      class="card-thumbnail"
    />
    <div class="item-info">
      <p class="title">Fall Limited Edition Sneakers</p>
      <p class="total-price" id="total-price">$125.00&#160&#xd7; ${cartItems.innerText} &#160 <span>$${price}.00</span></p>
    </div>
    <img src="./images/icon-delete.svg" alt="delete" class="dustbin">
  </div>
  <button>Checkout</button>`;
  } else if (cartItems.innerText == 0) {
    cartCard.classList.add("cartempty");
    cartCard.classList.remove("cartfilled");
    cartCard.innerHTML = `Your cart is empty`;
  }
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const currentActive = document.querySelector('.active');
    currentActive.classList.remove('active');
    thumbnail.classList.toggle('active');
    const address = thumbnail.attributes.src.value.replace('-thumbnail', '');
    pii.style.backgroundImage = `url(${address})`;
  });
});

previousImg.addEventListener('click', () => {
  if(imgNo === 1){
    imgNo = 4;
  }
  else{
    imgNo--;
  }
  const backgroundUrl = imgUrl + imgNo + '.jpg';
  pii.style.backgroundImage = `url(${backgroundUrl})`;
});

nextImg.addEventListener('click', () => {
  if(imgNo === 4){
    imgNo = 1;
  }
  else{
    imgNo++;
  }
  const backgroundUrl = imgUrl + imgNo + '.jpg';
  pii.style.backgroundImage = `url(${backgroundUrl})`;
});

