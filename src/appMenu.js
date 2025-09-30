// CSS!
import './css/style.css';
// JAVASCRIPTS!
import './js/fetch.js'; // Only for fetch utilities, no side effects
import { setupNavMenu } from './js/nav-menu.js';
import { setupDiningCardFeatures } from './js/dining-card.js';
import { setupExploreSection } from './js/explore.js';
import { setupMenuSlideshow } from './js/menu.js';
import { setupMenuItems } from './js/menuItem.js';
import { setupContactForm } from './js/contact-form.js';
import './js/main.js';

setupNavMenu();
setupDiningCardFeatures();
setupExploreSection();
setupMenuSlideshow();
setupMenuItems();
setupContactForm && setupContactForm();