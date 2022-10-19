const commentCounter = async () => {
  const commentConnter = document.querySelectorAll('.listed__comment');
  const postCount = document.querySelector('.post__comment__title');
  const counter = (await commentConnter.length);
  postCount.innerText += `(${counter})`;
}

export default commentCounter;