import './styles.css';
import renderFoodItems from './modules/renderFoodItems.js'
import renderLikes from './modules/renderLikes.js';

import addLikes from './modules/addLikes.js'

const foodContainerEl = document.querySelector('main');

const runRenderLikes = async () => {
await renderFoodItems();
renderLikes();
}
runRenderLikes();
foodContainerEl.addEventListener('click',async (e)=>{
  if(e.target.className==='icon__like') {
    console.log(e.target.parentNode.id);
    await addLikes(e.target.parentNode.id);
    renderLikes();
  }
})


    







