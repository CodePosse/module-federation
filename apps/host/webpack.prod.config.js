const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['login', 'http://localhost:3000/login'],
    ['signup', 'http://localhost:3000/signup'],
    ['dashboard', 'http://localhost:3000/dashboard'],
  ]
});
