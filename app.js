//calling the sliderWrapper and assigning it to an object
const wrapper = document.querySelector(".sliderWrapper")

//Changing the background color(note: c is capitalized)
//wrapper.style.backgroundColor = "red"

//distance from the starting of the x-axis to the image
//wrapper.style.transform = "translatex("

const menuItems = document.querySelectorAll(".menuItem")

 

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

let choosenProduct = products[0]

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        console.log("You clicked" + index);
        //change the current slide
        wrapper.style.transform = `translatex(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]
    })
    });