const commentMock = (data) => {
  let count = 0;

  if(data && data.length > 0){
    count = data.length;
  }
return count;

}

export default commentMock;