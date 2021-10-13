const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const quadros = [
  {
    title:"Border radius previewer",
    img: "./imgs/projetosIniciante/borderradiu.png",
    url: './ProjetosIniciante/Border-radiu_Previewer/index.html'
  },
  {
    title:"Calculator",
    img: "./imgs/projetosIniciante/calculator.png",
    url: './ProjetosIniciante/Calculator/index.html'
    },
  {
    title:"Cause effect",
    img: "./imgs/projetosIniciante/causeeffect.png",
    url: './ProjetosIniciante/CauseEffect/index.html'
    },
  {
    title:"Christmas lights",
    img: "./imgs/projetosIniciante/cristmasligths.png",
    url: './ProjetosIniciante/Christmas_Lights/index.html'
    },
  {
    title:"Color Cycle",
    img: "./imgs/projetosIniciante/colorcicle.png",
    url: './ProjetosIniciante/ColorCycle/index.html'
    },
    {
      title:"Dollars to cents",
      img: "./imgs/projetosIniciante/DollarsToCents.png",
      url: './ProjetosIniciante/DollarsToCents/index.html'
      }
];

quadros.map(quadro => {
    const cardClone = card.cloneNode(true);
    cardClone.querySelector("img").src = quadro.img;
    cardClone.querySelector(".title").innerHTML = quadro.title 
    cardClone.querySelector('a').href = quadro.url
    sectionCards.appendChild(cardClone);
  });