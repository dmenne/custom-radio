const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
const initCypressMousePositionPlugin = require('cypress-mouse-position/plugin');

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  initCypressMousePositionPlugin(on);
};
