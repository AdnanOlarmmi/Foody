const commentCounter = async () => {
  const commentConnter = document.querySelectorAll('.post__comment');
  const postCount = document.querySelector('.post__comment__title');
  commentConnter.forEach((each) => {
    const counter = each.children.length;
    postCount.innerText += `(${counter})`
  })
};

export default commentCounter;