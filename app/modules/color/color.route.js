const express = require("express");
const { reqValidate } = require("../../../src/middleware/reqValidate");
const { USER_ROLE } = require("../../../src/constants/user");
const { auth } = require("../../../src/middleware/auth");
const { createColorZod, updateColorZod } = require("./color.validation");
const {
  createColor,
  getColors,
  getColor,
  updateColor,
  deleteColor,
} = require("./color.controller");

const router = express.Router();

router
  .route("/")
  /**
   * @api {post} /
   * @apiDescription create color
   * @apiPermission all
   **/
  .post(reqValidate(createColorZod), createColor)
  /**
   * @api {get} /
   * @apiDescription ger all colors
   * @apiPermission all
   **/
  // .get(auth(USER_ROLE.ADMIN), createColor);
  .get(getColors);

router
  .route("/:id")
  /**
   * @api {get} /
   * @apiDescription get a single color
   * @apiPermission all
   **/
  .get(getColor)
  /**
   * @api {patch} /
   * @apiDescription update a single color
   * @apiPermission all
   **/
  .patch(reqValidate(updateColorZod), updateColor)
  /**
   * @api {delete} /
   * @apiDescription delete a single color
   * @apiPermission all
   **/
  .delete(deleteColor);

module.exports = router;
