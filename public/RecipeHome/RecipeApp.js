/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Component from '../Component/Component.js';
import Header from '../common/Header.js';
import Footer from '../common/footer.js';
import Paging from './Paging.js';
import SearchOptions from './SearchOptions.js';
import RecipeList from './RecipeList.js';
import { getRecipes } from '../services/recipe-api.js';

class RecipeApp extends Component {

  onRender(element) {
    const header = new Header();
    element.prepend(header.renderDOM());

    const optionsSection = element.querySelector('.recipe-filter-container');
    const searchOptions = new SearchOptions();
    optionsSection.prepend(searchOptions.renderDOM());

    const listSection = element.querySelector('.recipe-list');
    const paging = new Paging({ totalResults: 0 });
    listSection.appendChild(paging.renderDOM());

    const recipeList = new RecipeList({ recipes: [] });
    listSection.appendChild(recipeList.renderDOM());

    const footer = new Footer();
    listSection.appendChild(footer.renderDOM());
    const loadRecipes = async() => {
      const recipe = await getRecipes();
      console.log(recipe, 'recipe in Recipeapp');
      recipeList.update({ recipes: recipes });
      // const totalResults = response.length();
      // paging.update({ totalResults: totalResults });
    };
    loadRecipes();
    window.addEventListener('hashchange', () => {
      loadRecipes();
    });
  }
  renderHTML() {
    return /*html*/`
                <main class ="main">
                    <section class='recipe-filter-container'>
                    </section>
                    <section class="section-b">   
                    <section class="recipe-list"> 
                    </section>
                    </section>
                </main>    
        `;
  }
}

export default RecipeApp;
