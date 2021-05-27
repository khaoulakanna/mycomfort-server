const router = require("express").Router();
let User = require("../models/user");

router.route("/").post((req, res, next) => {
  const email = req.body.email;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const dateNaissance = req.body.dateNaissance;
  const genre = req.body.genre;
  const ville = req.body.ville;

  const newUser = new User({
    email,
    nom,
    prenom,
    dateNaissance,
    genre,
    ville,
  });

  newUser
    .save()
    .then((result) => {
      console.log(result);
      console.log("User Added Successfully!");
    })
    .catch((err) => console.log(err));
});

module.exports = router;