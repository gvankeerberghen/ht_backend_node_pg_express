const User = require('../models').User;

module.exports = {
  upsert(req, res) {
    return User
      .findById(req.body.id)
      .then(user => {
        if (!user) {
          return User.create({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email
          })
          .then(user => res.status(201).send(user))
          .catch(error => res.status(400).send(error));
        }

        return user
          .update({
            name: req.body.name,
            email: req.body.email
          })
          .then(() => res.status(200).send(user))
          .catch(error => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
