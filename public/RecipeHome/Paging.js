/* eslint-disable no-undef */
import Component from '../Component/Component.js';

class Paging extends Component {

  onRender(element) {
    const prevRecipeButton = element.querySelector('.prev');
    const nextRecipeButton = element.querySelector('.next');
    if(!prevRecipeButton) {
      return;
    }
    let page = 1;

    function updatePokeControls() {
      const recipeQueryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(recipeQueryString);
      const parsedRecipePage = parseInt(searchParams.get('page'));

      if(isNaN(parsedRecipePage)) {
        page = 1;
      }
      else {
        page = parsedRecipePage;
      }
    }
    updatePokeControls();
    window.addEventListener('hashchange', () => {
      updatePokeControls();
    });

    function updateRecipePage(increment) {
      const recipeQueryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(recipeQueryString);
      searchParams.set('page', page + increment);

      window.location.hash = searchParams.toString();
    }
    prevRecipeButton.addEventListener('click', () => {
      updateRecipePage(-1);
    });

    nextRecipeButton.addEventListener('click', () => {
      updateRecipePage(1);
    });
  }
  renderHTML() {
    const recipePerPage = 20;
    const totalResults = this.props.totalResults;
    const recipeQueryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(recipeQueryString);

    let page = 1;
    const parsedRecipePage = parseInt(searchParams.get('page'));
    if(isNaN(parsedRecipePage)) {
      page = 1;
    }
    else {
      page = parsedRecipePage;
    }
    if(totalResults === 0) {
      return /*html*/`
                <section class="paging"></section>
            `;
    }

    const lastRecipePage = Math.ceil(totalResults / recipePerPage);

    return /*html*/`
    <section class="buttons">
                <button class="prev" ${page === 1 ? 'disabled' : ''}>◀</button>
                <span>Pokémon ${page} of ${lastRecipePage}</span>
                <button class="next" ${page === lastRecipePage ? 'disabled' : ''}>▶</button>
                </section>
        `;
  }
}

export default Paging;
