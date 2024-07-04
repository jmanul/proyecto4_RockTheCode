import { createButton } from '../button/button';
import { createList } from '../list/list';
import './terminal.css'



const buttonprint = (id) => {
     
     for (const iterator of id) {
         
          console.log(iterator);
     
    }
     const screen = document.querySelector('.info-up');
     createList(screen, id, id);
}


export const createTerminal = (site, id) => {

     const sectionInfo = document.createElement('section');
     sectionInfo.classList.add('flex-container', 'section-info');
     sectionInfo.id = id
     site.append(sectionInfo);
     const topInfo = document.createElement('div');
     topInfo.classList.add('top-info');
     sectionInfo.append(topInfo);
     const containerBackground = document.createElement('div');
     containerBackground.classList.add('flex-container', 'container-background');
     sectionInfo.append(containerBackground);

     const infoUp = document.createElement('div');
     infoUp.classList.add('flex-container', 'info-up');
     sectionInfo.append(infoUp);

     const logoInfo = document.createElement('img');
     logoInfo.className = 'logo-info'
     logoInfo.src = '/public/terminal.svg'
     topInfo.append(logoInfo)

     const buttons = document.createElement('div');
     buttons.classList.add('buttons');
     topInfo.append(buttons);

     createButton(buttons, 'Esperiencia', 'esperiencia', 'button-square');
     createButton(buttons, 'Formación', 'formacion', 'button-square');

     const iconsInfo = document.createElement('div');
     iconsInfo.classList.add('flex-container', 'icons-info');
     iconsInfo.innerHTML = `<img src="/public/small.svg" id="small"><img src="/public/open.svg" id="open"><img src="/public/close.svg" id="close">`;
     topInfo.append(iconsInfo);

     const buttonsAction = () => {

          const buttons = document.querySelectorAll('.button-square');
     
          for (const button of buttons) {
             
               button.addEventListener('click', () => buttonprint(button.id));
               
          }
     }

     buttonsAction();

}