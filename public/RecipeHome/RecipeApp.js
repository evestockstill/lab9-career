/* eslint-disable no-undef */
import Component from '../Component/Component.js';
import Header from '../common/Header.js';
import Footer from '../common/footer.js';
import RecipeList from './RecipeList.js';
import { getRecipes } from '../services/recipe-api';

class RecipeApp extends Component {

  onRender(element) {
    const header = new Header();
    element.prepend(header.renderDOM());
    const listSection = element.querySelector('.recipe-list');
    const recipeList = new RecipeList({ recipes: [] });
    listSection.appendChild(recipeList.renderDOM());

    const footer = new Footer();
    listSection.appendChild(footer.renderDOM());
    const loadRecipes = async() => {
      const response = await getRecipes();
      const recipes = response.results;
      recipeList.update({ recipes: recipes });
    };
    loadRecipes();

    window.addEventListener('hashchange', () => {
      loadRecipes();
    });
  }

  renderHTML() {
    return /*html*/`
                <main class ="main">
                    
                    <section class="section-b">   
                    <section class="recipe-list"> 
                    </section>
                    </section>
                </main>    
        `;
  }
}

export default RecipeApp;
