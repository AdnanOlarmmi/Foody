import foodItems from './foodItems.js';

const commentApiKey = 'O0Itmyv3eikfhRODPWfL';
const commentBaseApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentApiKey}/comments`;
const likeKey = 'o3ZbADYRisQBifGzcDCQ';
const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net';

const likeApiEndPoint = `${likeURL}/capstoneApi/apps/${likeKey}/likes`;

const foodURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

const foodBaseUrl = [];

foodItems.forEach((item) => {
  foodBaseUrl.push(`${foodURL}=${item}`);
});

export { foodBaseUrl, likeApiEndPoint, commentBaseApi };