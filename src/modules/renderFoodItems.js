import { foodBaseUrl } from './config.js';

const foodContainerEl = document.querySelector('.foods__container');

const renderFoodItems = async () => {
  let markup = '';

  foodBaseUrl.forEach(async (item) => {
    try {
      const res = await fetch(item);
      const data = await res.json();
      if (!res.ok) {
        foodContainerEl.innerHTML = 'Server Down';
      }
      data.meals.forEach((item) => {
        markup += `
            <section class="food__item flex-column">
            <div class="food__icon flex-row">
            <span class="icon__hot">HOT</span>
            <span class="icon" id=${item.idMeal}>
            <span class="icon__like"></span>
            <span class="like__count"></span>
            </span>
            </div>
            <div class="food__image">
            <img src="${item.strMealThumb}" alt="asdf" class="item__Img"></div>
            <p class="food__name">${item.strMeal}</p>
            <p class="food__area">${item.strArea}</p>
            <button class="btn__trigger" id="cath">See More</button>
            </section>`;
        foodContainerEl.innerHTML = markup;
      });
    } catch (err) {
      foodContainerEl.innerHTML = err;
    }
    // const btnTrigger = document.querySelectorAll('#cath');
    // return btnTrigger;
  });
};

// console.log(btnTrigger);
export default renderFoodItems;

// const createMealEl = () => {
//   const section = document.querySelector('section');
//   const divIcon = document.querySelector('div');
//   const spanHot = document.querySelector('span');
//   const spanId = document.querySelector('span');
//   const spanLike = document.querySelector('span');
//   const spanCount = document.querySelector('span');
//   const divImg = document.querySelector('div');
//   const imgMeal = document.querySelector('img');
//   const pName = document.querySelector('p');
//   const pArea = document.querySelector('p');
//   const buttonSee = document.querySelector('button');

//   section.classList.add('food__item', 'flex-column');
//   divIcon.classList.add('food__icon', 'flex-row')
//   spanHot.classList.add('icon__hot')
//   spanId.classList.add('icon')
//   spanLike.classList.add('icon__like')
//   spanCount.classList.add('like__count')
//   divImg.classList.add('food__image')
//   pName.classList.add('food__name')
//   pArea.classList.add('food__area')
//   buttonSee.classList.add('btn__trigger')

//   spanId.setAttribute('id', `${item.idMeal}`)

//   divImg.append(imgMeal, pName, pArea, buttonSee);
//   section.append(divIcon, divImg)
//   divIcon.append(spanHot, spanId, spanLike, spanCount)

// }