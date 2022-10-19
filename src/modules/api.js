const apiKey = 'o3ZbADYRisQBifGzcDCQ';
const baseApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}`;


export const getComments = async() => {
  const response =  await fetch(`${baseApi}/comments?item_id=item1`);
  const result = await response.json();
  return result;
}
