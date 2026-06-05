const multer = require("multer");
const path = require("path");

/*
=================================
Storage Configuration
=================================
*/

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9);

    cb(
      null,
      `resume-${uniqueSuffix}${path.extname(
        file.originalname
      )}`
    );
  },
});

/*
=================================
PDF File Validation
=================================
*/

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype ===
    "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only PDF files are allowed"
      ),
      false
    );
  }
};

/*
=================================
Multer Configuration
=================================
*/

const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = upload;