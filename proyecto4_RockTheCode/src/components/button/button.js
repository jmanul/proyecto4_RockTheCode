import './button.css';

export const createButton = (site, content, id, name) => {
     

     const divButton = document.createElement('div');
     divButton.classList.add(name);
     divButton.id = id;
     site.append(divButton);
     const buttonButton = document.createElement('button');
     buttonButton.type = 'button';
    
     buttonButton.classList.add('flex-container', id);
     buttonButton.innerHTML = content;
     divButton.appendChild(buttonButton);
     
};