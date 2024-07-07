import { createArticle } from './src/components/article/article';
import { createButton } from './src/components/button/button';
import { createList } from './src/components/list/list';
import { createTerminal } from './src/components/terminal/terminal';
import './style.css'

const proyects = [
  { id :'pinterest',
    title: 'Pinterest',
    description:'Replica y rebranding de Pinterest, creado en Vite usando estilos modulares y componentes, utilizando Javascript y la Api de Unsplash para dotar de funcionalidad el buscador de imagenes.',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }, { icon: '/js.svg', name: 'js' }, { icon: '/vite.svg', name: 'vite' }],
    deploy: 'https://proyecto3rockthecode.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717787421/Captura_desde_2024-06-07_21-09-59_bjagkc.png'
  },

  { id: 'motherEarth',
    title: 'Mother Earth',
    description: 'Mother Earth esta creado a partir del diseño hecho en figma por Nickelfox Design, este proyecto esta realizado utilizando unicamente HTML5 y CSS3.',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg", name: 'css'}],
    deploy: 'https://practica-flex-jmanul.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717787275/Captura_desde_2024-06-07_21-07-29_ne29zs.png'
  },  {
    id : 'icon',
    title: 'I.C.O.N.',
    description: 'Replica de la pagina oficial de I.C.O.N., este proyecto esta realizado utilizando unicamente HTML5 y CSS3. ',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }],
    deploy: 'https://proyecto1-rock-the-code.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717785940/Captura_desde_2024-06-07_20-43-37_jxnx7g.png'
  },  {
    id: 'planetaHuerto',
    title: 'Planeta Huerto',
    description: 'Proyecto basado en la pagina de Planeta Huerto, incluye sistema de filtro de busqueda, se pueden filtrar productos teniendo en cuenta marca , precios y palabras introducidas en el buscador, la funcionalidad de la pagina esta realizada con Javascript.',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }, { icon: '/js.svg', name: 'js' }, { icon: '/vite.svg', name: 'vite' }],
    deploy: 'https://proyecto2-jmanul.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717785948/Captura_desde_2024-06-07_20-44-13_pkt8hz.png'
    
  },  {
    id : 'pandora',
    title: 'Pandora',
    description: 'Replica de la pagina de Pandora, realizada unicamente usando HTML5 y CSS3 .',
    technologies: [{
      icon: "/html.svg ", name: 'html'
    }, { icon: "/css.svg ", name: 'css' }],
    deploy: 'https://proyecto1-josemanuelsanchezballester.netlify.app',
    image: 'https://res.cloudinary.com/dn6utw1rl/image/upload/v1717785956/Captura_desde_2024-06-07_20-45-15_dgxouc.png'
  }
]

const rrss = [

  {
    url: 'https://discord.com/channels/jmanul77#6352',
    icon: '/discord.svg',
    name: 'discord'
  },
  {
    url: 'https://www.github.com/jmanul',
    icon: '/git-hub.svg',
    name: 'git-hub'
  },
  {
    url: 'https://www.linkedin.com/in/jmanul',
    icon: '/linkedin.svg',
    name: 'linkedin'
  },
  {
    url: 'https://www.behance.net/josemasnchez1',
    icon: '/behance.svg',
    name: 'behance'
  }
  
]

const technology = [

  {
   
    icon: '/git.svg',
    name: 'git'
  },
  {
  
    icon: '/html-5.svg',
    name: 'html-5'
  },
  {
    
    icon: '/css-3.svg',
    name: 'css-3'
  },
  {
   
    icon: '/javascript.svg',
    name: 'javascript'
  },
  {
   
    icon: '/figma.svg',
    name: 'figma'
  },
  {
   
    icon: '/photoshop.svg',
    name: 'photoshop'
  },
  {
   
    icon: '/illustrator.svg',
    name: 'illustrator'
  }
  
]

const texts = [

  {
    id:'esperiencia',
    title: 'Esperiencia',
    text: [`<div class="flex-container">
    <img src="/company.svg">
    <h4>Paredes Distribuciones</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2012 - 2015</spam>
    </div>
  <p>Tecnico comercial de peluqueria y estetica profesional</p>`,
      `<div class="flex-container">
    <img src="/company.svg">
    <h4>Salesland</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2017</spam></div>
  <p>Promotor de producto de fidelización</p>`,
      `<div class="flex-container">
    <img src="/company.svg">
    <h4>Jake SA</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2018 - 2021</spam></div>
  <p>Gestión de residuos</p>`,
      `<div class="flex-container">
    <img src="/company.svg">
    <h4>Tablenova</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2022 - 2024</spam></div>
  <p>Operario de maquina de canteadora</p>`]
  },
  
  {
    id: 'formacion',
    title: 'Formación',
    text: [
      `<div class="flex-container">
    <img src="/school.svg">
    <h4>I.B. Floridablanca</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>1991 - 1998</spam>
    </div>
  <p> B.U.P.</p>`,
  `<div class="flex-container">
    <img src="/school.svg">
    <h4>UOC X - Xtended Studies</h4>
    <h5>Ciclo Formativo de Grado Superior</h5>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2019 - 2023</spam></div>
  <p>Desarrollo de aplicaciones multiplataforma (DAM)</p>`,
      `<div class="flex-container">
    <img src="/school.svg">
    <h4>Oracle</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2020</spam></div>
  <p>Diploma curso Programación de bases de datos con PL/SQL</p>`,
      `<div class="flex-container">
    <img src="/school.svg">
    <h4>OpenBootcamp</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2022</spam></div>
  <p>Certificación Git</p>`,
  `<div class="flex-container">
    <img src="/school.svg">
    <h4>Coderhouse</h4>
  </div>
  <div class="flex-container"><img src="/calendar.svg">
    <spam>2023</spam></div>
  <p>Certificado Coderhouse Photoshop e Illustrator</p>`
    ]
  }
 
  
]


const main = document.querySelector('main');
main.className = 'flex-container';
const header = document.createElement('header');
header.id = 'header';
header.className = 'flex-container';
document.body.insertBefore(header, main);
const titleName = document.createElement('h1');
titleName.innerText = 'Jose Manuel Sanchez';
header.append(titleName)
const foto = document.createElement('div');
foto.innerHTML = '<img class="foto-perfil" src="https://res.cloudinary.com/dn6utw1rl/image/upload/v1710357027/pasttri_gstn60.webp" alt="foto perfil">';
foto.className = 'foto';
header.append(foto);
createList(main, technology, 'technology');
const buttons = document.createElement('div');
buttons.classList.add('buttons');
main.append(buttons);

createButton(buttons, 'Esperiencia', 'esperiencia', 'button-square');
createButton(buttons, 'Formación', 'formacion', 'button-square');
createTerminal(main, 'info');

//? footer

const footer = document.createElement('footer');
footer.id = 'footer';
footer.className = 'flex-container';
document.body.append(footer);
const divRrss = document.createElement('div');
divRrss.classList.add('flex-container', 'div-rrss');
footer.append(divRrss);
createList(divRrss, rrss, 'rrss');


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

const buttonprint = (id, list) => {


  const backgroundScreen = document.querySelector('.info-up-container');
  backgroundScreen.innerHTML = '';
  const screen = document.createElement('div');
  screen.className = 'info-up';
  backgroundScreen.append(screen);
  const cursor = document.createElement('img');
  cursor.className = 'cursor';
  cursor.src = '/mark.svg';
  screen.append(cursor);

  for (const content of list) {

    if (id === content.id) {

      setTimeout(() => {

        const h3 = document.createElement('h3');
        h3.innerText = content.title
        screen.append(h3);
        for (const item of content.text) {

          screen.removeChild(cursor);
          screen.append(cursor);

          setTimeout(() => {

            const article = document.createElement('article');
            article.className = 'text-terminal';
            article.innerHTML = item;
            screen.append(article);

            screen.removeChild(cursor);
            screen.append(cursor);

          }, 1000)

        }

      }, 1000);

    }

  }
  
}
  

left.addEventListener('click', () => contSlider(`-${widthMov} `));
right.addEventListener('click', () => contSlider(`${widthMov} `));
const buttonsAction = (list, name) => {

  const buttons = document.querySelectorAll(name);

  for (const button of buttons) {

    button.addEventListener('click', () => buttonprint(button.id, list));

  }
}

buttonsAction(texts, '.button-square');



//? mensaje de fin de pagina (footer)


const footerMaking = document.createElement('div');
footerMaking.classList.add('flex-container', 'making');
footer.append(footerMaking);
footerMaking.innerHTML = `<span class="flex-container"><img class ='contact' src="/mail.svg" alt="contact"><a href="mailto:jmanul77@gmail.com">jmanul77@gmail.com</a><strong>Hecho por Jmanul</strong><div class="pasttri-logo"><img src="https://res.cloudinary.com/dn6utw1rl/image/upload/v1710357027/pasttri_gstn60.webp" alt="logo pasttri"></div></span>`;