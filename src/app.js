// CSS!
import './css/style.css';

// JAVASCRIPTS!
import './js/fetch.js'; // Only for fetch utilities, no side effects
import { initNavMenu } from './js/nav-menu.js';
import { setupDiningCardFeatures } from './js/dining-card.js';
import { setupExploreSection as initializeExploreSection } from './js/explore.js';
import { setupMenuSlideshow } from './js/menu.js';
import { setupMenuItems } from './js/menuItem.js';
import { setupContactForm } from './js/contact-form.js';
import { initNewsletterForm } from "./js/newsletter.js";

import './js/main.js';

initNavMenu();
setupDiningCardFeatures();
setupExploreSection() && initializeExploreSection();
setupMenuSlideshow();
setupMenuItems();
setupContactForm && setupContactForm();

document.addEventListener("DOMContentLoaded", () => {
    initNewsletterForm();
});
