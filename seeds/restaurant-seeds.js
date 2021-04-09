const { Restaurant } = require('../models');

const restaurantData = 

[
  {
    "name": "Carluccio's",
    "location": "Bull Ring", 
    "img_url": "https://github.com/Loosekonnection/believe/blob/main/img/Tomatoes.JPG"
  },
  {
    "name": "Tapas Revolution",
    "location": "Stephenson Street, Birmingham",
    "img_url": "https://res.cloudinary.com/blushing-cow-limited/image/upload/v1617825459/samples/food/spices.jpg"
 },{
    "name": "Turtle Bay",
    "location": "John Bright Street, Birmingham"
 },{
    "name": "Tattu",
    "location": "Barwick Street, Birmingham"
 },{
    "name": "Pizza Express",
    "location": "The Citadel, Birmingham"
 },{
    "name": "Las Iguanas",
    "location": "Temple Street, Birmingham"
 }
]
const seedRestaurants = () => Restaurant.bulkCreate(restaurantData);

module.exports = seedRestaurants;