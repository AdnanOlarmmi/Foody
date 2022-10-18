import {likeApiEndPoint} from './config.js'

const likeCountEl = document.getElementsByClassName('like__count');

const renderLikes = async () => {
    try {
        const res = await fetch(likeApiEndPoint);
        const data = await res.json();
        if (!res.ok) {
          recentScoresEl.innerHTML = 'Server Down';
        }
       
        const likeCount = [...likeCountEl];
        data.forEach((item) => {
            console.log(item.item_id);
            likeCount.forEach((itemid) => {
                if(item.item_id===itemid.parentNode.id) {
                    console.log(item.likes);
                    itemid.innerHTML = item.likes;
                }
            })
        })
        
      } catch (err) {
        console.log(err)
      }  
}

export default renderLikes;