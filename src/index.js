import './styles.css';
import likeIcon from './images/likeIcon.svg'
import foodBaseUrl from './modules/config.js';
import renderFoodItems from './modules/renderFoodItems.js'



renderFoodItems();

document.querySelector('.sam').src = likeIcon;

