import './slider.css'
import { proyects } from "../../data/data";
import { createArticle } from "../article/article";
import { createButton } from "../button/button";

let cont = 0;
let totalMov = 0;
let widthProyects = 0;
let widthArticle = 0;
let widthMov = 0;
let lengthEnd = 0;



const initSlider = (list) => {
     const right = document.querySelector('#right');
     const left = document.querySelector('#left');

     const sectionArticles = document.querySelector('.section-articles');


     if (cont == list.length - lengthEnd) {

          left.classList.add('off-button');

     } else if (cont < 2) {

          right.classList.add('off-button');
     }

     widthProyects = sectionArticles.getBoundingClientRect();
     const articles = [...document.querySelectorAll('.article')];
     widthArticle = articles[0].getBoundingClientRect();
     widthMov = widthArticle.width + 20;
     lengthEnd = Math.round(widthProyects.width / widthMov);

};

const runSlider = (TotalMov, list) => {


     for (let i = 0; i < list.length; i++) {

          let article = list[i].id;

          const item = document.getElementById(article);

          item.style.transform = `translateX(${TotalMov}px)`;


     }

}


const contSlider = (mov, list) => {

     const right = document.querySelector('#right');
     const left = document.querySelector('#left');

     initSlider(list);

     if (mov < 0 && cont < list.length - lengthEnd) {

          cont++;

          totalMov = cont * mov;

          right.classList.remove('off-button');

     } else if (mov > 0 && cont > 0) {

          cont--;

          totalMov = -(cont * mov);

          left.classList.remove('off-button');

     }

     runSlider(totalMov, list);

}


export const createSlider = (list) => {
     const main = document.querySelector('main');
     const proyectContainer = document.createElement('div');
     proyectContainer.classList.add('flex-container', 'proyect-container');
     main.append(proyectContainer);
     const proyectBackground = document.createElement('div');
     proyectBackground.className = 'proyect-background';
     proyectContainer.append(proyectBackground);
     const sectionArticles = document.createElement('section');
     sectionArticles.classList.add('flex-container', 'section-articles');
     createButton(proyectContainer, `<i class="bi bi-arrow-left-circle-fill"></i>`, 'left', 'circle');
     proyectContainer.append(sectionArticles);
     createButton(proyectContainer, `<i class="bi bi-arrow-right-circle-fill"></i>`, 'right', 'circle');


     const createSection = (list) => {

          for (let i = 0; i < list.length; i++) {

               let article = list[i];

               createArticle(sectionArticles, article);
          };
     };

     createSection(list);
     initSlider(proyects);

     left.addEventListener('click', () => contSlider(`-${widthMov} `, list));
     right.addEventListener('click', () => contSlider(`${widthMov} `, list));


}




