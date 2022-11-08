const eleContainer = document.querySelector(".container");
const eleSlider = document.querySelector(".slider");
const eleThumbs = document.querySelector(".thumbs");
const eleArrDn = document.querySelector(".arrow-down");
const eleArrUp = document.querySelector(".arrow-up");
const images = [
  {
    image: "01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// function generateImgs(obj) {
//   return `
// 				<img src="img/${obj.image}" alt="${obj.title}" class="slider-img">
// 				<div class="info" >
//         <h2>${obj.title}</h2>
// 				<p>${obj.text}</p>
//         </div>
// 		`;
// }

// function generateThumbs(obj) {
//   return `
// 				<img src="img/${obj.image}" alt="${obj.title}" class="thumb-img">
// 		`;
// }
// images.forEach((objImg) => (eleSlider.innerHTML += generateImgs(objImg)));

for (let i = 0; i < images.length; i++) {
  // eleSlider.innerHTML += generateImgs(images[i]);
  const eleImg = document.createElement("img");
  eleImg.src = `img/${images.image}`;
  eleImg.classList.add("slider-img");
  if (i === 0) {
    eleImg.classList.add("active");
  }
  eleSlider.append(eleImg);

  // creare i tag immagine che vanno nella sezione .thumbs
}
