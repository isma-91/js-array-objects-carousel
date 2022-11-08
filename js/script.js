const eleContainer = document.querySelector(".container");
const eleSlider = document.querySelector(".slider");
const eleThumbs = document.querySelector(".thumbs");
const eleArrDn = document.querySelector(".arrow-down");
const eleArrUp = document.querySelector(".arrow-up");
const eleBtnStop = document.querySelector(".stop");
const eleBtnInvert = document.querySelector(".invert");
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

// function generateImgs(obj, i) {
//   let className;
//   if (i === 0) {
//     className = "active slider-img";
//   } else {
//     className = "slider-img";
//   }
//   return `
// 				<img src="img/${obj.image}" alt="${obj.title}" class="${className}">
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

//ciclo per creare e appendere tutti gli elementi nell HTML
for (let i = 0; i < images.length; i++) {
  // eleSlider.innerHTML += generateImgs(images[i], i);
  const eleImg = document.createElement("img");
  eleImg.src = `img/${images[i].image}`;
  eleImg.classList.add("slider-img");

  const eleInfo = document.createElement("div");
  eleInfo.classList.add("info");

  const eleTitle = document.createElement("h2");
  eleTitle.innerHTML = images[i].title;

  const eleP = document.createElement("p");
  eleP.innerHTML = images[i].text;
  eleSlider.append(eleInfo);
  eleInfo.append(eleTitle);
  eleInfo.append(eleP);

  if (i === 0) {
    eleImg.classList.add("active");
    eleInfo.classList.add("active");
  }
  eleSlider.append(eleImg);

  const eleThumb = document.createElement("img");
  eleThumb.src = `img/${images[i].image}`;
  eleThumb.classList.add("thumb-img");
  if (i === 0) {
    eleThumb.classList.add("active");
  }
  eleThumbs.append(eleThumb);
}

//Creare simil Array per selezionare TUTTI gli elementi con quella classe in modo da selezionarli con la crescita o diminuzione dell'indice
const listImgs = document.querySelectorAll(".slider-img");
const listThumbs = document.querySelectorAll(".thumb-img");
const listInfo = document.querySelectorAll(".info");

//impostiamo il ciclo alla pressione del bottone
let index = 0; // indice che ci serve per selezionare l'immagine da rendere attiva
eleArrDn.addEventListener("click", function () {
  listImgs[index].classList.remove("active");
  listThumbs[index].classList.remove("active");
  listInfo[index].classList.remove("active");

  index++;
  if (index === listImgs.length) {
    index = 0;
  }

  listImgs[index].classList.add("active");
  listThumbs[index].classList.add("active");
  listInfo[index].classList.add("active");
});

eleArrUp.addEventListener("click", function () {
  listImgs[index].classList.remove("active");
  listThumbs[index].classList.remove("active");
  listInfo[index].classList.remove("active");

  if (index === 0) {
    index = listImgs.length;
  }
  index--;

  listImgs[index].classList.add("active");
  listThumbs[index].classList.add("active");
  listInfo[index].classList.add("active");
});

//impostiamo l'autoplay
let changeInterval = setInterval(() => {
  listImgs[index].classList.remove("active");
  listThumbs[index].classList.remove("active");
  listInfo[index].classList.remove("active");

  index++;
  if (index === listImgs.length) {
    index = 0;
  }

  listImgs[index].classList.add("active");
  listThumbs[index].classList.add("active");
  listInfo[index].classList.add("active");
}, 3000);

//creare l'evento per stoppare e far ripartire l'autoplay
eleBtnStop.addEventListener("click", function () {
  if (changeInterval != null) {
    clearInterval(changeInterval);
    eleBtnStop.innerHTML = "Avvia Autoscorrimento";
    changeInterval = null;
  } else if (changeInterval === null) {
    changeInterval = setInterval(() => {
      listImgs[index].classList.remove("active");
      listThumbs[index].classList.remove("active");
      listInfo[index].classList.remove("active");

      index++;
      if (index === listImgs.length) {
        index = 0;
      }

      listImgs[index].classList.add("active");
      listThumbs[index].classList.add("active");
      listInfo[index].classList.add("active");
    }, 3000);
    eleBtnStop.innerHTML = "Ferma Autoscorrimento";
  }
});

//Invertiamo l'ordine di scorrimento
let isClicked = false; //variabile che cambia quando clickiamo il bottone
eleBtnInvert.addEventListener("click", () => {
  if (isClicked == false) {
    isClicked = true;
    clearInterval(changeInterval);
    changeInterval = setInterval(() => {
      listImgs[index].classList.remove("active");
      listThumbs[index].classList.remove("active");
      listInfo[index].classList.remove("active");

      if (index === 0) {
        index = listImgs.length;
      }
      index--;

      listImgs[index].classList.add("active");
      listThumbs[index].classList.add("active");
      listInfo[index].classList.add("active");
    }, 3000);
  } else {
    isClicked = false;
    clearInterval(changeInterval);
    changeInterval = setInterval(() => {
      listImgs[index].classList.remove("active");
      listThumbs[index].classList.remove("active");
      listInfo[index].classList.remove("active");

      index++;
      if (index === listImgs.length) {
        index = 0;
      }

      listImgs[index].classList.add("active");
      listThumbs[index].classList.add("active");
      listInfo[index].classList.add("active");
    }, 3000);
  }
});

// clearInterval(changeInterval));
