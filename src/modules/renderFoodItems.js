import {foodBaseUrl} from "./config.js";

const foodContainerEl = document.querySelector('.foods__container');

const renderFoodItems = async () => {
  let markup = '';
 
   foodBaseUrl.forEach( async (item) => {
    try {
        const res = await fetch(item);
        let data = await res.json();
        if (!res.ok) {
            foodContainerEl.innerHTML = 'Server Down';
        }

        data.meals.forEach((item) => {
            markup += `
            <section class="food__item flex-column">
            <div class="food__icon flex-row">
            <span class="icon__hot">HOT</span>
            <span class="icon" id=${item.idMeal}>
            <span class="icon__like">fffff</span>
            <span class="like__count"></span>
            </span>
            </div>
            <div class="food__image">
            <img src="${item.strMealThumb}" alt="asdf"></div>
            <p class="food__name">${item.strMeal}</p>
            <p class="food__area">${item.strArea}</p>
            <button>See More</button>
            </section>`
            foodContainerEl.innerHTML = markup;
        });
      } catch (err) {
        foodContainerEl.innerHTML = err; 
      }
  })
};

export default renderFoodItems;