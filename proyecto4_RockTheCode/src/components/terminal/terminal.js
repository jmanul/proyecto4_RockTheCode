import { createButton } from '../button/button';
import './terminal.css'

// const moveScreen = () => {
//      const screen = document.querySelector('.info-up');
     
//      setTimeout(() => {
//           let heightText = screen.getBoundingClientRect();
//           console.log(heightText)
//           screen.style.transform = `translateY(-${heightText.height})px)`;
//      }, 2000)
// }


const buttonprint = (id, list) => {

     
     const backgroundScreen = document.querySelector('.info-up-container');
     backgroundScreen.innerHTML = '';
     const screen = document.createElement('div');
     screen.className = 'info-up';
     backgroundScreen.append(screen);
     const cursor = document.createElement('img');
     cursor.className = 'cursor';
     cursor.src = '/public/mark.svg';
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
                            
                         },1000)

                    }
                   
               }, 1000); 
               
          }

     } 
     // moveScreen();
}


export const createTerminal = (site, id, list) => {

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
     infoUp.classList.add('info-up-container');
     sectionInfo.append(infoUp);
     const cursor = document.createElement('img');
     cursor.className = 'cursor';
     cursor.id = 'cursor';
     cursor.src = '/public/mark.svg';
     infoUp.append(cursor);


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

     const close = document.querySelector('#close');
     close.onclick = () => {

          infoUp.innerHTML = '';
          infoUp.append(cursor);
     }

     const open = document.querySelector('#open');
     open.onclick = () => {
        
          sectionInfo.classList.add('section-info-open');
        
     }
     
     const small = document.querySelector('#small');
     small.onclick = () => {
        
          sectionInfo.classList.remove('section-info-open');
        
     }

     const buttonsAction = (list) => {
          
          const buttons = document.querySelectorAll('.button-square');
         
          for (const button of buttons) {

               button.addEventListener('click', () => buttonprint(button.id, list));

          }
     }

     buttonsAction(list);

}