import './title.css'


export const createTitle = (site, text, id) => {

     const title = document.createElement('h2');
     title.innerText = text;
     title.id = id;
     site.append(title);
}