///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// This file is the webpack entry point
//
// Here you can import your components, icons, etc.
// For example:
//
// import modal from 'components/Modal';
// import 'icons/home.svg';
//
// Webpack will automatically look for files relative to `assets/scripts/`, `assets/` and `node_modules`.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Import the importer Sass file, that imports the main CSS
import 'scss/importer.scss';

import 'scss/design-system.scss'; // This contains demo-style and should only be loaded in fractal, not in a production-site

/**
 * Icon imports
 */
import 'icons/house.svg';
import 'icons/house-1.svg';
import 'icons/bird-house.svg';
import 'icons/cog-1.svg';
import 'icons/filter-1.svg';

/**
 * Polyfills
 **/
import 'svgxuse';
import 'objectFitPolyfill';


/**
 * JavaScript components
 **/
import '../../../assets/scripts/main';
