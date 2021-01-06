const { rest } = require("lodash");

exports.filterRestaurant = (restaurantData, cityData) => {
  const copyRestaurant = [...restaurantData];
  const thirdRestaurant = copyRestaurant.map((restaurant) => {
    const city = cityData.filter(
      (city) => city["name"] === restaurant["city_name"]
    );
    if (!city.length) return restaurant;
    const newRestaurant = { ...restaurant };
    newRestaurant["city_id"] = city[0]["_id"];
    delete newRestaurant["city_name"];
    return newRestaurant;
  });
  return thirdRestaurant;
};

exports.filterReviews = (reviewData, restaurantData, userData) => {
  const copyReview = [...reviewData];
  const cleanedData = copyReview.map((review) => {
    const restaurant = restaurantData.filter(
      (restaurant) => restaurant["name"] === review["restaurant_name"]
    );

    const user = userData.filter((user) => {
      return user["username"] === review["user_name"];
    });
    const newReview = { ...review };
    newReview["restaurant_id"] = restaurant[0]["_id"];
    delete newReview["restaurant_name"];
    newReview["user_id"] = user[0]["_id"];
    delete newReview["user_name"];
    return newReview;
  });
  return cleanedData;
};
