const apiKey = 'o3ZbADYRisQBifGzcDCQ';
const baseApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}`;


export const getComments = async() => {
  const response =  await fetch(`${baseApi}/comments?item_id=item1`);
  const result = await response.json();
  return result;
}

export const addComments = async (data) => {
  console.log(data);
  const response =  await fetch(`${baseApi}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
}
