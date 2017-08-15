const Technology = require('../models').Technology;

function createTech(values) {
  return Technology.create({
    name: values.name,
    type: values.type,
    description: values.description || null,
    url: values.url,
    createdBy: values.userId
  });
}

// Get all collection of techs with their links, votes and reviews
//
// params & data
//
function getAll(req, res) {
  return Technology
    .findAll({
      include: [ 'links', 'votes', 'reviews' ]
    })
    .then(techList => res.status(200).send(techList))
    .catch(error => res.status(500).send(error));
}

// Upsert a technology
//
// params & data
//    req.body.id           [optional] the id of the tech to upsert,
//                          if not specified tech will be created
//    req.body.userId       the id of the user adding the tech
//    req.body.name         the name of the tech
//    req.body.type         the type of the tech
//    req.body.description  [optional] description of the tech
//    req.body.url          the url of the tech
//
function upsert(req, res) {
  if (req.body.id) {
    return Technology
      .findById(req.body.id)
      .then(tech => {
        if (!tech) {
          return createTech(req.body)
            .then(createdTech => res.status(201).send(createdTech))
            .catch(error => res.status(400).send(error));
        }

        return tech
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(tech))
          .catch(error => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

  return createTech(req.body)
    .then(tech => res.status(201).send(tech))
    .catch(error => res.status(400).send(error));
}

module.exports = {
  upsert: upsert,
  getAll: getAll
};
