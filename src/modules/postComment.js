import { commentBaseApi } from "./config.js";


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
        console.log('success')
      } catch (err) {
        console.log('Not Successful');
      }
}

export default postComment;