const Vote = require('../models').Vote;


// Add a vote if does not exist yet
//
// params & data
//    req.params.techId     the id of the tech this vote is for
//    req.body.userId       the id of the user voting
//
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

// Delete a vote
//
// params & data
//    req.params.voteId     the id of the vote to delete
//
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
