import './button.css';

export const createButton = (site, content, id, name) => {
     

     const divButton = document.createElement('div');
     divButton.classList.add(name);
     site.append(divButton);
     const buttonButton = document.createElement('button');
     buttonButton.type = 'button';
     buttonButton.id = id;
     buttonButton.className = 'flex-container';
     buttonButton.innerHTML = content;
     divButton.appendChild(buttonButton);
     
};