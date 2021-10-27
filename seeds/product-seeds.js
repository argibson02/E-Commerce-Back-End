const { Product } = require('../models');
console.log(7);
const productData = [
  {
    product_name: 'Salt Life Inline Woven Performance Fishing Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'New Balance 674',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Ducks Unlimited Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Jimmy Buffett\'s Songs You Know by Heart Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Big Rock Zip-Off Pants',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
