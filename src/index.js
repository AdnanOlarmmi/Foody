import './styles.css';
import likeIcon from './images/likeIcon.svg'
import foodBaseUrl from './modules/config.js';
import renderFoodItems from './modules/renderFoodItems.js'

console.log(foodBaseUrl);
renderFoodItems();

document.querySelector('.sam').src = likeIcon;

