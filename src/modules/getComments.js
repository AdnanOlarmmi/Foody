import { commentBaseApi } from "./config.js"



const getComments = async (id) => {
    
    const commentEl = document.querySelector('.comments__item');
    let markup = ''
    try {
        const res = await fetch(`${commentBaseApi}?item_id=${id}`);
        const data = await res.json();
        data.forEach((comment) => {
            markup += `<p class="date">${comment.creation_date}</p>
                  <p class="name">${comment.username}
                  </p>
                  <div class="comment">${comment.comment}</div> `
        })
        commentEl.innerHTML = markup;
      } catch (err) {
        console.log(err);
      }
}

export default getComments;