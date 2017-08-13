const Review = require('../models').Review;

function createReview(techId, values) {
  return Review.create({
    text: values.text,
    reviewTechnologyId: techId,
    reviewUserId: values.userId    
  });
}

function upsert(req, res) {
  if (req.body.id) {
    return Review
      .findById(req.body.id)
      .then(review => {
        if (!review) {
          return createReview(req.params.techId, req.body)
            .then(createdReview => res.status(201).send(createdReview))
            .catch(error => res.status(400).send(error));
        }

        return review
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(review))
          .catch(error => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

  return createReview(req.params.techId, req.body)
    .then(review => res.status(201).send(review))
    .catch(error => res.status(400).send(error));
}

function destroy(req, res) {
  return Review
    .findById(req.params.reviewId)
    .then(review => {
        if (!review) {
          return res.status(400).send({
              message: 'Review Not Found',
          });
        }

        return review
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
