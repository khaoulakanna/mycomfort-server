const router = require("express").Router();
let Data = require("../models/data.js");

router.route("/").post((req, res, next) => {
  const user = req.body.user;
  const zoneId = req.body.zoneId;
  const climat = req.body.climat;
  const activity = req.body.activity;
  const clothing = req.body.clothing;
  const date = req.body.date;

  const newData = new Data({
    user,
    zoneId,
    climat,
    activity,
    clothing,
    date,
  });

  newData
    .save()
    .then((result) => {
      console.log(result);
      console.log("Data Added Successfully!");
    })
    .catch((err) => console.log(err));
});

module.exports = router;