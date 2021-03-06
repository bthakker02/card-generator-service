// Initializes the `cards` service on path `/cards`
const createService = require('feathers-sequelize');
const createModel = require('../../models/cards.model');
const hooks = require('./cards.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cards', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('cards');

  service.hooks(hooks);
};
