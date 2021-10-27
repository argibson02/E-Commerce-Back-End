const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // NEEDS CODE
  try {
    let categoryData = await Category.findAll({
      include: [{ model: Product }] /// is this product info they want?
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // NEEDS CODE
  try {
    let categoryData = await Category.findByPk({ // double check that find by PK
      include: [{ model: Product }] 
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // NEEDS CODE

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  // NEEDS CODE

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // NEEDS CODE

});

module.exports = router;
