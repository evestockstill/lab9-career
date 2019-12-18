const express = require('express');
const {
  getRecipes,
  getRecipe,
  createRecipe,
  patchRecipe,
  deleteRecipe
} = require('../controllers/recipes');

const router = express.Router();
router
  .route('/')
  .get(getRecipes)
  .post(createRecipe);

router
  .route('/:id')
  .get(getRecipe)
  .patch(patchRecipe)
  .delete(deleteRecipe);

module.exports = router;


