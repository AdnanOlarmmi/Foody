import { foodBaseUrl } from './config.js';

const getFoodItems = async () => {
  const foodInfo = ['as'];
  foodBaseUrl.forEach(async (item) => {
    try {
      const res = await fetch(item);
      const data = await res.json();
    } catch (err) {
    }
    return data.meals;
  });

  return foodInfo.length;
};

const get = async () => {
  getFoodItems().then(
  );
};

export default get;