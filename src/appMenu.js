// CSS!
import './css/style.css';
import './css/navbar.css';
import './css/hero.css';
import './css/story.css';
import './css/dining.css';
import './css/news.css';
import './css/footer.css';
import './css/product-menu.css';
import './css/contact.css';
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