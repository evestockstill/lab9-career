import Component from '../Component/Component.js';

class RecipeItem extends Component {
  renderHTML() {
    const recipe = this.props.recipe;
    
    if(image === 'N/A') {
      image = '';
    }
    return `
        <li class="recipe-item">
    <div>
    <a href="http://${recipe.name}" target="_blank"></a>
       
            <div class="recipe-cards">
                <h2 class="recipe-name">${recipe.name}</h2>
                </div>
                </div>
                </li>

                
        `;
  }
}
export default RecipeItem;
