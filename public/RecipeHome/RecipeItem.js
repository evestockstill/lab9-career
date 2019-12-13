import Component from '../Component/Component.js';

class RecipeItem extends Component {
  renderHTML() {
    const recipe = this.props.recipe;
    let image = recipe.url_image;
    if(image === 'N/A') {
      image = '';
    }
    return `
        <li class="recipe-item">
    <div>
    <a href="http://${recipe.id}" target="_blank"></a>
        <img src="${image}" alt="${recipe.id}>
            <div class="recipe-cards">
                <h2 class="recipe-name">${recipe.name}</h2>
                </div>
                </div>
                </li>

                
        `;
  }
}
export default RecipeItem;
