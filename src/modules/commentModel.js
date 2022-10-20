import { foodBaseUrl } from './config.js';
import getComments from './getComments.js';
const pop = document.querySelector('.pop-windo');

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
        if(item.idMeal === id) {
          markup += `
          <div class="flex-column food__description">
              <img class="img" src="${item.strMealThumb}" alt="">
              <p class="food__information">
                  ${item.strInstructions}
              </p>
          </div>
          <div class="comment__container" id=${item.idMeal}>
             <h2>Comments</h2>
             <div class="comments">
              <div class="comments__item">  
              </div>
             </div>
             <form action="">
              <input type="text" name="" id="name">
              <textarea name="" id="input" cols="30" rows="10"></textarea>
             <button class="chat">Comment</button> 
             </form>
             
          </div>
      </section>`
      pop.innerHTML = markup;
        getComments(id) 
        }
        
      })
      
    } catch(err) {
        console.log(err)
      }
      
      
    })
    
    
}

export default displayPop;