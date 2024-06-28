import { createArticle } from './src/components/article/article';
import { createButton } from './src/components/button/button';
import './style.css'

let proyects = [
  { id :'pinterest',
    title: 'Pinterest',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }, { icon: '/js.svg', name: 'js' }, { icon: '/vite.svg', name: 'vite' }],
    deploy: 'https://proyecto3rockthecode.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717787421/Captura_desde_2024-06-07_21-09-59_bjagkc.png'
  },

  { id: 'motherEarth',
    title: 'Mother Earth',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg", name: 'css'}],
    deploy: 'https://practica-flex-jmanul.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717787275/Captura_desde_2024-06-07_21-07-29_ne29zs.png'
  },  {
    id : 'icon',
    title: 'I.C.O.N.',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }],
    deploy: 'https://proyecto1-rock-the-code.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717785940/Captura_desde_2024-06-07_20-43-37_jxnx7g.png'
  },  {
    id: 'planetaHuerto',
    title: 'Planeta Huerto',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }, { icon: '/js.svg', name: 'js' }, { icon: '/vite.svg', name: 'vite' }],
    deploy: 'https://proyecto2-jmanul.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717785948/Captura_desde_2024-06-07_20-44-13_pkt8hz.png'
    
  },  {
    id : 'pandora',
    title: 'Pandora',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }],
    deploy: 'https://proyecto1-josemanuelsanchezballester.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717785956/Captura_desde_2024-06-07_20-45-15_dgxouc.png'
  }
]



const main = document.querySelector('main');
main.className = 'flex-container';
const header = document.createElement('header');
header.id = 'header';
header.className = 'flex-container';
document.body.insertBefore(header, main);
const titleName = document.createElement('h1');
titleName.innerText = 'JOSE MANUEL SANCHEZ';
header.append(titleName)
const footer = document.createElement('footer');
footer.id = 'footer';
footer.className = 'flex-container';
document.body.append(footer);


const proyectTitle = document.createElement('h2');
proyectTitle.innerText = 'Proyectos';
main.append(proyectTitle);
const proyectContainer = document.createElement('div');
proyectContainer.classList.add('flex-container', 'proyect-container');
main.append(proyectContainer);
const proyectBackground = document.createElement('div');
proyectBackground.className = 'proyect-background';
proyectContainer.append(proyectBackground);
const sectionArticles = document.createElement('section');
sectionArticles.classList.add('flex-container', 'section-articles');
createButton(proyectContainer, `<i class="bi bi-arrow-left-circle-fill"></i>`, 'left', 'circle');
proyectContainer.append(sectionArticles);
createButton(proyectContainer, `<i class="bi bi-arrow-right-circle-fill"></i>`, 'right', 'circle');

const createSection = (list) => {
  
  for (let i = 0; i < list.length; i++) {

    let article = list[i];

    createArticle(sectionArticles , article);
  };
 
};

let cont = 0;
let totalMov = 0;
let widthProyects = 0;
let widthArticle = 0;
let widthMov = 0;
let lengthEnd = 0;



const initSlider = () => {
 
  if (cont == proyects.length - lengthEnd) {

    left.classList.toggle('off-button');
  }else if (cont < 2) {

    right.classList.toggle('off-button');
  }

  widthProyects = sectionArticles.getBoundingClientRect();
   const articles = [...document.querySelectorAll('.article')];
   widthArticle = articles[0].getBoundingClientRect();
   widthMov = widthArticle.width + 20;
  lengthEnd = Math.round(widthProyects.width / widthMov);
 
};

createSection(proyects);

initSlider();

const contSlider = (mov) => {
  
  
  initSlider();

 if (mov < 0 && cont < proyects.length - lengthEnd){

  cont++;

  totalMov = cont * mov;

  right.classList.remove('off-button');

 }else if (mov > 0 && cont > 0) {
  
  cont--;
 
  totalMov = -(cont * mov);
  
  left.classList.remove('off-button');
 
 }

 runSlider(totalMov);

}
const runSlider = (TotalMov) => {

    
    for (let i = 0; i < proyects.length; i++) {
     
      let article = proyects[i].id;

      const item = document.getElementById(article);
     
      item.style.transform = `translateX(${TotalMov}px)`;
      
    
  }
 
}
  

left.addEventListener('click', () => contSlider(`-${widthMov} `));
right.addEventListener('click', () => contSlider(`${widthMov} `));

//? mensaje de fin de pagina (footer)


const footerMaking = document.createElement('div');
footerMaking.classList.add('flex-container', 'making');
footer.append(footerMaking);
footerMaking.innerHTML = `<span class="flex-container"><strong>Hecho por José Manuel Sánchez</strong><div class="pasttri-logo"><img src="https://res.cloudinary.com/dn6utw1rl/image/upload/v1710357027/pasttri_gstn60.webp" alt="logo pasttri"></div></span>`;