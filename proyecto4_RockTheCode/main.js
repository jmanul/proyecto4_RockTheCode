import { createArticle } from './src/components/article/article';
import { createButton } from './src/components/button/button';
import { createList } from './src/components/list/list';
import { createLogo } from './src/components/logo/logo';
import { createTerminal } from './src/components/terminal/terminal';
import { createTitle } from './src/components/title/title';
import { interLinks, proyects, rrss, technology, texts } from './src/data/data';
import './style.css'



const main = document.querySelector('main');
main.className = 'flex-container';
const header = document.createElement('header');
document.body.insertBefore(header, main);
const titleName = document.createElement('h1');
titleName.id = 'title-name';
titleName.innerText = 'Jose Manuel Sanchez';


createLogo(header, './logo-pasttri-svg.svg', 'logo-header','#title-name');

main.append(titleName)

createTitle(main, 'Sobre Mi', 'sobre-mi')
createList(main, technology, 'technology');
const buttons = document.createElement('div');
buttons.classList.add('buttons');
main.append(buttons);

createButton(buttons, 'Experiencia', 'experiencia', 'button-square');
createButton(buttons, 'Formación', 'formacion', 'button-square');
createTerminal(main, 'info');

createTitle(main, 'Proyectos', 'proyectos');

createList(header, interLinks, 'nav');

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


//? footer

const footer = document.createElement('footer');
footer.id = 'footer';
footer.className = 'flex-container';
document.body.append(footer);
const divRrss = document.createElement('div');
divRrss.classList.add('flex-container', 'div-rrss');
footer.append(divRrss);
createList(divRrss, rrss, 'rrss');


//? mensaje de fin de pagina (footer)


const footerMaking = document.createElement('div');
footerMaking.classList.add('flex-container', 'making');
footer.append(footerMaking);
footerMaking.innerHTML = `<span class="flex-container"><img class ='contact' src="/mail.svg" alt="contact"><a href="mailto:jmanul77@gmail.com">jmanul77@gmail.com</a><strong>Hecho por Jmanul</strong><div class="pasttri-logo"><img src="./logo-pasttri-svg.svg" alt="logo pasttri"></div></span>`;