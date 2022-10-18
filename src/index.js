import './styles.css';
import renderFoodItems from './modules/renderFoodItems.js';
import renderLikes from './modules/renderLikes.js';
import itemsCounter from './modules/itemsCounter.js';

import addLikes from './modules/addLikes.js';

const foodContainerEl = document.querySelector('main');
const hamburgerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('nav');
const barsEl = document.getElementsByClassName('bar');
const toggleNav = () => {
    hamburgerEl.addEventListener('click', () => {
        navEl.classList.toggle('open');
        for(let item of barsEl) {
            item.classList.toggle('change');
        }
    })
}


const itemsNumberEl = document.querySelector('.item_number');

itemsNumberEl.innerHTML = itemsCounter();

const runRenderLikes = async () => {
  await renderFoodItems();
  renderLikes();
};
runRenderLikes();
foodContainerEl.addEventListener('click', async (e) => {
  if (e.target.className === 'icon__like') {
    await addLikes(e.target.parentNode.id);
    renderLikes();
  }
});

toggleNav();


