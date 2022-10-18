import foodItems from "./foodItems.js";

// const gameKey = 'CV8kZ3fJBIn6rdoHPQi4';
const baseURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';





const foodBaseUrl = []

// const apiEndPoint = `${baseURL}/games/${gameKey}/scores`;

foodItems.forEach((item) => {
    foodBaseUrl.push(`${baseURL}=${item}`)
})





export default foodBaseUrl;