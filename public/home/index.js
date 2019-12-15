/* eslint-disable no-undef */
import HomeApp from './HomeApp.js';

const app = new HomeApp();
const element = app.renderDOM();
document.body.prepend(element);
