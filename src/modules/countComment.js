const commentCounter = () => {
  const counter = [];
  let totalCount = 0;
  const commentConnter = document.querySelectorAll('.post__comment');
  const postCount = document.querySelector('.post__comment__title span');
  commentConnter.forEach(async (each) => {
    counter.push(each.children);
  });
  counter.forEach((count) => {
    totalCount = count.length;
    postCount.innerHTML = `(${totalCount})`;
  });
};
export default commentCounter;