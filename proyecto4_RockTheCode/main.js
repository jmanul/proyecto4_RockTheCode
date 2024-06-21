import { createArticle } from './src/components/article/article';
import { createButton } from './src/components/button/button';
import './style.css'

let proyects = [

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
  },  {
    id :'pinterest',
    title: 'Pinterest',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }, { icon: '/js.svg', name: 'js' }, { icon: '/vite.svg', name: 'vite' }],
    deploy: 'https://proyecto3rockthecode.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717787421/Captura_desde_2024-06-07_21-09-59_bjagkc.png'
  }
]



const main = document.querySelector('main');
main.className = 'flex-container';
const header = document.createElement('header');
header.id = 'header';
header.className = 'flex-container';
document.body.insertBefore(header, main);
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

let x = 0;
let totalMov = 0;
let widthProyects = 0;
let widthArticle = 0;

const initSlider = () => {
 
  if (x == proyects.length - 1) {

    left.classList.toggle('off-button');
  }else if (x < 2) {

    right.classList.toggle('off-button');
  }

  widthProyects = sectionArticles.getBoundingClientRect();
   const articles = [...document.querySelectorAll('.article')];
   widthArticle = articles[0].getBoundingClientRect();
  console.log(widthProyects.width);
  console.log(widthArticle.width);
  
};

createSection(proyects);


initSlider();

const contSlider = (mov) => { initSlider();
 if (mov < 0 && x < proyects.length - 1){
  x++;
  console.log(x);
  
  totalMov = x * mov;

  console.log(totalMov);

  right.classList.remove('off-button');

 }else if (mov > 0 && x > 0) {
  
  x--;
  console.log(x);

  totalMov = -(x * mov);
  
  console.log(totalMov);
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


  

left.addEventListener('click', () => contSlider('-370'));
right.addEventListener('click', () => contSlider('370'));

