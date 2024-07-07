
import './terminal.css'


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

}