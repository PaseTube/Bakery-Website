// CSS!
import './css/style.css';
import './css/navbar.css';
import './css/product-menu.css';
import './css/footer.css';
// Only the minimal JS for menu.html
import { setupNavMenu } from './js/nav-menu.js';
import { setupMenuItems } from './js/menuItem.js';

import { setupCustomCursor } from './js/custom-cursor.js';

setupNavMenu();
setupMenuItems();
setupCustomCursor();
