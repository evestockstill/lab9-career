/* eslint-disable no-undef */
import RecipeApp from './RecipeApp';

const recipeApp = new RecipeApp();
const element = recipeApp.renderDOM();
document.body.prepend(element);
