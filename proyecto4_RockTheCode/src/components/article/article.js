import { createList } from '../list/list';
import './article.css'

export const createArticle = (site, item) => {
     
     


     const article = document.createElement('article');
     article.id = item.id
     article.classList.add('article');
     site.append(article);
     const a = document.createElement('a');
     article.append(a);
     a.href = item.deploy;
     a.target = '_blank';
     const divImg = document.createElement('div');
     divImg.className = 'divImg';
     divImg.style.backgroundImage = `url(${item.image})`;
     a.append(divImg);
     const title = document.createElement('h3');
     title.className = 'title';
     title.innerText = item.title;
     article.append(title);
     const divTechnologies = document.createElement('div');
     divTechnologies.classList.add('flex-container', 'div-technologies');
     article.append(divTechnologies);
     createList(divTechnologies, item.technologies , item.title);

}