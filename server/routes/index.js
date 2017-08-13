const usersController = require('../controllers').users;
const technologiesController = require('../controllers').technologies;
const linksController = require('../controllers').links;
const votesController = require('../controllers').votes;
const reviewsController = require('../controllers').reviews;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the HT app API!',
  }));

  // Users
  app.put('/api/users', usersController.upsert);
  
  // Technologies
  app.get('/api/technologies', technologiesController.getAll);
  app.put('/api/technologies', technologiesController.upsert);

  // Links
  app.put('/api/technologies/:techId/links', linksController.upsert);
  app.delete('/api/technologies/:techId/links/:linkId', linksController.destroy);

  // Votes
  app.put('/api/technologies/:techId/votes', votesController.addVote);
  app.delete('/api/technologies/:techId/votes/:voteId', votesController.destroy);

  // Reviews
  app.put('/api/technologies/:techId/reviews', reviewsController.upsert);
  app.delete('/api/technologies/:techId/reviews/:reviewId', reviewsController.destroy);
};
