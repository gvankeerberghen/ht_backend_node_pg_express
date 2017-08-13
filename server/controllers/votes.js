const Vote = require('../models').Vote;

function addVote(req, res) {
  return Vote
    .findOne({
      where: {
        voteTechnologyId: req.params.techId,
        voteUserId: req.body.userId
      }
    })
    .then(vote => {
      if (!vote) {
        return Vote.create({
            voteTechnologyId: req.params.techId,
            voteUserId: req.body.userId
          })
          .then(createdVote => res.status(201).send(createdVote))
          .catch(error => res.status(400).send(error));
      }

      res.status(200).send(vote);
    })
    .catch((error) => res.status(400).send(error));
}

function destroy(req, res) {
  return Vote
    .findById(req.params.voteId)
    .then(vote => {
      if (!vote) {
        return res.status(400).send({
          message: 'Vote Not Found',
        });
      }

      return vote
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(500).send(error));
    })
    .catch(error => res.status(400).send(error));  
}

module.exports = {
  addVote: addVote,
  destroy: destroy
};
