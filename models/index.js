// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

console.log(1);
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
console.log(2);

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
console.log(3);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
console.log(4);

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
console.log(5);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
