const express = require("express");
const router = express.Router();
const Alien = require("../Models/alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error ", err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const aliens = await Alien.findById(req.params.id);
    res.json(aliens);
  } catch (err) {
    res.send("Error ", err);
  }
});

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await alien.save();
    // res.json(a1);
    //res.status(200).send((a1[0].id).toString());
    res.status(200).send(a1);
  } catch (err) {
    res.send("Error", err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub;
    const a1 = await alien.save();
    res.status(200).send(a1);
  } catch (err) {
    res.send("Error", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    const a1 = await alien.remove();
    res.status(200).send(a1);
  } catch (err) {
    console.log("Error", err);
  }
});

module.exports = router;
