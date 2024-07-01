import { createList } from '../list/list';
import './article.css';

const clearText = (element) => {

     element.className = 'article';

     const itemActiv = document.querySelector('.text-flow');

     itemActiv.className = 'text-flow-reverse';

     setTimeout(() => {
          itemActiv.remove();
     }, 3000);
}

const resetArticle = (item) => {
     
     const articles = [...document.querySelectorAll('.article')];

     const divText = document.getElementById(item.id);

     if (divText.classList.value == 'article opacity-text') {

          clearText(divText);

          return;

     } else {
          for (const article of articles) {

               if (article.classList.value == 'article opacity-text') {
                  
                    clearText(article);
               }

          }

          onText(item);
     }
  
}

const onText = (item) => {
     
     const divText = document.getElementById(item.id);
     divText.classList.add('opacity-text');
     const textContainer = document.createElement('div');
     textContainer.className = 'text-flow';
     divText.append(textContainer);
     const text = document.createElement('p');
     text.innerText = `${item.description}`;
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
     const divTop = document.createElement('div');
     divTop.classList.add('div-top', 'flex-container');
     article.append(divTop);
     const a = document.createElement('a');
     divTop.append(a);
     a.href = item.deploy;
     a.target = '_blank';
     const title = document.createElement('h3');
     title.className = 'title';
     title.innerText = item.title;
     a.append(title);
     const divTechnologies = document.createElement('div');
     divTechnologies.classList.add('flex-container', 'div-technologies');
     divTop.append(divTechnologies);
     createList(divTechnologies, item.technologies, item.title);
     
     divImg.addEventListener('click', () => resetArticle(item));

}