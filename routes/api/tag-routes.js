const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // NEEDS CODE
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }] // double check models to include
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // NEEDS CODE

});

router.post('/', async (req, res) => {
  // create a new tag
  // NEEDS CODE

});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  // NEEDS CODE

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // NEEDS CODE

});

module.exports = router;
