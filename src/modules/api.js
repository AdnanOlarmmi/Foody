

const getComments = async () => {
  const response = await fetch(`${baseApi}/comments?item_id=item1`);
  const result = await response.json();
  return result;
};

export default getComments;
