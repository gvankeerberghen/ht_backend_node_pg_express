const User = require('../models').User;

module.exports = {
  // Upsert a user
  //
  // params & data
  //    req.body.id           [optional] the id of the user to upsert,
  //                          if not specified user will be created
  //    req.body.name         the name of the user
  //    req.body.email        the email of the user
  //
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
