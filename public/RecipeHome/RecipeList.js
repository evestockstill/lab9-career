import Component from '../Components/Components';
import RecipeItem from './RecipeItem.js';
class RecipeList extends Component {

  onRender(element) {
    const recipes = this.props.recipes;

    recipes.forEach(recipe => {
      const props = { recipe };
      const recipeItem = new RecipeItem(props);
      const recipeItemDOM = recipeItem.renderDOM();
      element.appendChild(recipeItemDOM);
    });
  }
  renderHTML() {
    return /*html*/`
                <ul class="all-recipe">       
        `;
  }
}


export default RecipeList;
