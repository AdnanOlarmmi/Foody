export const commentsContainer = document.querySelector('.post__comment');
export const listComments = (post) => {
  if(!post) {
    commentsContainer.innerHTML = `No post listed`;
    return;
  }

  post.sort((a, b) => b.comments - a.comments)
  .forEach((each) => {
    commentsContainer.innerHTML += `
    <li class="listed__comment">
    <span>${each.creation_date}</span>
    <span>${each.username}: </span>
    <span>${each.comment}</span>
    </li>
    `
  })
}
