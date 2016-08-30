// we want font-awesome to load as soon as possible to show the fa-spinner
import '../styles/styles.css';

// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
// import * as Bluebird from 'bluebird'
// Bluebird.config({ warnings: false })
export async function configure (aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-gravatar-component/dist/commonjs/index')
    .globalResources('hello')

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')
  await aurelia.start();
  // aurelia.setRoot('app');
  aurelia.enhance(document.querySelector('hello'))
  aurelia.enhance(document.querySelector('gravatar'))

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
   const offline = await System.import('offline-plugin/runtime');
   offline.install();
   */
}