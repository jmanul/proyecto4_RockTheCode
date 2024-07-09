
import { createButton } from './src/components/button/button';
import { createList } from './src/components/list/list';
import { createLogo } from './src/components/logo/logo';
import { createSlider } from './src/components/slider/slider';
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

createSlider(proyects);


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