import { createList } from '../list/list';
import './article.css';

const onText = (item) => {
     
     const divText = document.getElementById(item.id);
     divText.classList.add('opacity-text');
     const textContainer = document.createElement('div');
     textContainer.className = 'text-flow';
     divText.append(textContainer);
     const text = document.createElement('p');
     text.innerText = 'que pasa tio';
     textContainer.append(text);
}

export const createArticle = (site, item) => {
     
     


     const article = document.createElement('article');
     article.id = item.id
     article.classList.add('article');
     site.append(article);
     const divImg = document.createElement('div');
     divImg.className = 'divImg';
     divImg.style.backgroundImage = `url(${item.image})`;
     article.append(divImg);
     const a = document.createElement('a');
     article.append(a);
     a.href = item.deploy;
     a.target = '_blank';
     const title = document.createElement('h3');
     title.className = 'title';
     title.innerText = item.title;
     a.append(title);
     const divTechnologies = document.createElement('div');
     divTechnologies.classList.add('flex-container', 'div-technologies');
     article.append(divTechnologies);
     createList(divTechnologies, item.technologies, item.title);
     
     divImg.addEventListener('click', () => onText(item));

}