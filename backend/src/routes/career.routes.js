const express = require("express");

const router = express.Router();

const {
  submitCareerApplication,
} = require(
  "../controllers/career.controller"
);

const upload = require(
  "../middlewares/upload.middleware"
);

/*
=================================
Career Application Route
=================================
POST /api/careers/apply
=================================
*/

router.post(
  "/apply",
  upload.single("resume"),
  submitCareerApplication
);

module.exports = router;