import 'jquery';
import 'popper.js';
import 'bootstrap';

import importAllFiles from './build/utils';

// Load theme files
require('./scss/theme.scss');

// Main
require('./js/main.js');

// Require all images in the assets/images folder
importAllFiles(require.context('./images', false, /\.(png|jpe?g|gif|svg)$/));