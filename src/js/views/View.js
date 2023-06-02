import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }

    this._data = data;
    const markup = this._generateMarkup(this._data);

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    this._clear();
    const html = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div> `;
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderError(message = this._message) {
    const markup = `
      <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
          `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message) {
    const markup = `
      <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
          `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // _generateMarkupIngredients(ing) {
  //   return `
  //   <li class="recipe__ingredient">
  //     <svg class="recipe__icon">
  //       <use href="${icons}#icon-check"></use>
  //     </svg>
  //     <div class="recipe__quantity"><strong style="padding-right:3px;">${
  //       ing.quantity ? ing.quantity.toFixed(1) : ' '
  //     } </strong></div>
  //     <div class="recipe__description">${
  //       ing.unit
  //         ? `<span class="recipe__unit"><strong>${ing.unit} </strong></span>`
  //         : ' '
  //     }${ing.description}
  //     </div>
  //   </li>
  //   `;
  // }
}
