const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

//All products with their corresponding details
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.jpg",
      },
      {
        code: "darkblue",
        img: "./img/air2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.jpg",
      },
      {
        code: "green",
        img: "./img/jordan2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.jpg",
      },
      {
        code: "green",
        img: "./img/blazer2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.jpg",
      },
      {
        code: "lightgray",
        img: "./img/crater2.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.jpg",
      },
      {
        code: "black",
        img: "./img/hippie2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide , NOTE: Normal screen width = 100vw
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct when picked
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
//Adding a click event so the products changes to their corresponding images in color after picking a color
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
//Adding a click event
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
        //origin background and color
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    //Changes after picking
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


//Assigning  a variable to the queried classes to be used.
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

//Enable the payment form to display after clicking the buy button
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
//Adding a click event so the form closes whenever its clicked
close.addEventListener("click", () => {
  payment.style.display = "none";
});