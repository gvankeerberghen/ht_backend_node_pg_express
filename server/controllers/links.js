const Link = require('../models').Link;

function createLink(techId, values) {
  return Link.create({
    technologyId: techId,
    name: values.name,
    type: values.type,
    description: values.description || null,
    url: values.url
  });
}

function upsert(req, res) {
  if (req.body.id) {
    return Link
      .findById(req.body.id)
      .then(link => {
        if (!link) {
          return createLink(req.params.techId, req.body)
            .then(createdLink => res.status(201).send(createdLink))
            .catch(error => res.status(400).send(error));
        }

        return link
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(link))
          .catch(error => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

  return createLink(req.params.techId, req.body)
    .then(link => res.status(201).send(link))
    .catch(error => res.status(400).send(error));
}

function destroy(req, res) {
  return Link
    .findById(req.params.linkId)
    .then(link => {
      if (!link) {
        return res.status(400).send({
          message: 'Link Not Found',
        });
      }
      return link
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(500).send(error));
    })
    .catch(error => res.status(400).send(error));  
}

module.exports = {
  upsert: upsert,
  destroy: destroy
};
