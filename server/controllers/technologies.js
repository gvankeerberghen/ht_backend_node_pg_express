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

function getAll(req, res) {
  return Technology
    .findAll({
      include: [ 'links', 'votes', 'reviews' ]
    })
    .then(techList => res.status(200).send(techList))
    .catch(error => res.status(500).send(error));
}

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
