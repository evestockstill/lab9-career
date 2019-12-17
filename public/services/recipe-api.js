/* eslint-disable no-undef */
const URL = 'http://localhost:7890/api/v1/recipes';

export async function getRecipes() {
  let recipeQueryString = window.location.hash.slice(1);
  const url = `${URL}${recipeQueryString}`;
  const response = await fetch(url);
  const recipeData = await response.json();
  if(recipeData.Response === 'False') {
    return {
      Search: [],
      totalResults: 0
    };
  }
  return recipeData;
}
