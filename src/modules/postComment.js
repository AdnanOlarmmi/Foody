import { commentBaseApi } from "./config.js";
import getComments from "./getComments.js";


const postComment = async (commentObj) => {

 

    try {
        const res = await fetch(commentBaseApi, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentObj),
        });
        if (!res.ok) {
          console.log('Not Successful');
        }
        getComments(commentObj.item_id); 
        
        
      } catch (err) {
        console.log('Not Successful');
      }
}

export default postComment;