const router = require("express").Router();
const CoustomController = require("../controllers/CoustomController");

/** /api/coustom/ */
router.use((req, _res, next) => {
  console.log(`A request coustom route :${req.url}`);
  next();
});

/**
 * insert coustom
 */
router.post("/", CoustomController.createOne);

/**
 * update one coustom
 */
router.patch("/:id", CoustomController.updateByID);

/**
 * find one coustom
 */
router.get("/:id", CoustomController.findOneByID);

/**
 * find all coustom
 */
router.get("/", (_req, res) => {
  CoustomController.findAll(res);
});

/**
 * delete one coustom
 */
router.delete("/:id", CoustomController.deleteByID);

module.exports = router;
