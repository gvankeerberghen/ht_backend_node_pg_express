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

// Upsert a link
//
// params & data
//    req.body.id           [optional] the id of the link to upsert,
//                          if not specified link will be created
//    req.params.techId     the id of the tech which this link is for
//    req.body.name         name to give to the tech
//    req.body.type         type of the tech
//    req.body.description  [optional] description of the tech
//    req.body.url          the url of the link
//
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

// Delete a link
//
// params & data
//    req.params.linkId     the id of the link to be deleted
//
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
