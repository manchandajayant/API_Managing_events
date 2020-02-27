const { Router } = require("express");
const Event = require("./model");
const router = new Router();

router.post("/event", (req, res, next) => {
  console.log("this is a new event", req.body);
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
});

module.exports = router;
