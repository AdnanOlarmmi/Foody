import { foodBaseUrl } from './config.js';
import getComments from './getComments.js';

const pop = document.querySelector('.pop-windo');
const foodContainerEl = document.querySelector('.foods__container');

const displayPop = (id) => {
  let markup = '';
  foodBaseUrl.forEach(async (item) => {
    try {
      const res = await fetch(item);
      const data = await res.json();
      if (!res.ok) {
        foodContainerEl.innerHTML = 'Server Down';
      }

      data.meals.forEach((item) => {
        if (item.idMeal === id) {
          markup += `
          <div class="model__container">
          <button class="close" type="button">
            <span class="x__btn">×</span>
          </button>
        </div>
          <div class="flex-column food__description model__head">
          
              <img class="img" src="${item.strMealThumb}" alt="">
              <h2 class="model__name">${item.strMeal}</h2>
              <ul class="model__prop">
                <li class="model__item">
                  <span>Category: </span>
                  <span class="span__content">${item.strCategory}</span>
                </li>
                  <li class="model__item">
                    <span>Area: </span>
                    <span class="span__content">${item.strArea}</span>
                  </li>
                  <li class="model__item">
                    <span>Tags: </span>
                    <span class="span__content">${item.strIngredient10}</span>
                  </li>
                  <li class="model__item">
                    <span>Source: </span>
                    <span class="span__content"><a href="${item.strYoutube}">YouTube</a></span>
                  </li>
                </ul>
          </div>

          <div class="comment__container" id=${item.idMeal}>
          <h2 class="post__comment__title">Comments<span></span></h2>
             <div class="comments">
              <div class="comments__item post__comment"> 
              </div>
             </div>
             <form class="comment__form">
              <input class="input__field" type="text" id="name" placeholder="Your name">
              <textarea class="input__field" id="input" cols="30" rows="10" placeholder="Your insight"></textarea>
             <button class="chat">Comment</button> 
             <div class="message">
             <p class="success">Form successfully submited</p>
             <p class="danger">Please fill in the form</p>
           </div>
             </form>
             
          </div>
      </section>`;
          pop.innerHTML = markup;
          getComments(id);
        }
      });
    } catch (err) {
      foodContainerEl.innerHTML = err;
    }
  });
};

export default displayPop;