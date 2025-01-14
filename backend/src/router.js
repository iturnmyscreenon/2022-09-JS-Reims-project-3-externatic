const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/offers", itemControllers.browse);
router.get("/offers/:id", itemControllers.read);
router.put("/offers/:id", itemControllers.edit);
router.post("/offers", itemControllers.add);
router.delete("/offers/:id", itemControllers.destroy);

router.get("/companies", itemControllers.browse);
router.get("/companies/:id", itemControllers.read);
router.put("/companies/:id", itemControllers.edit);
router.post("/companies", itemControllers.add);
router.delete("/companies/:id", itemControllers.destroy);

router.get("/candidates", itemControllers.browse);
router.get("/candidates/:id", itemControllers.read);
router.put("/candidates/:id", itemControllers.edit);
router.post("/candidates", itemControllers.add);
router.delete("/candidates/:id", itemControllers.destroy);

router.get("/users", itemControllers.browse);
router.get("/users/:id", itemControllers.read);
router.put("/users/:id", itemControllers.edit);
router.post("/users", itemControllers.add);
router.delete("/users/:id", itemControllers.destroy);

router.get("/documents", itemControllers.browse);
router.get("/documents/:id", itemControllers.read);
router.put("/documents/:id", itemControllers.edit);
router.post("/documents", itemControllers.add);
router.delete("/documents/:id", itemControllers.destroy);

module.exports = router;
