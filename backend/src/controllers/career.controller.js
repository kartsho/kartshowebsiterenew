const Career = require("../models/Career");

const {
  sendCareerApplicationToHR,
  sendCandidateConfirmationEmail,
} = require("../services/email.service");

const submitCareerApplication =
  async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        course,
        branch,
        role,
      } = req.body;

      /*
      ============================
      Resume Validation
      ============================
      */

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message:
            "Resume PDF is required",
        });
      }

      /*
      ============================
      Save Candidate
      ============================
      */

      const application =
        await Career.create({
          fullName,
          email,
          phone,
          course,
          branch,
          role,

          resume: req.file.path,
        });

      /*
      ============================
      Send Mail To HR
      ============================
      */

      await sendCareerApplicationToHR(
        application,
        req.file.path
      );

      /*
      ============================
      Send Confirmation Mail
      ============================
      */

      await sendCandidateConfirmationEmail(
        application
      );

      /*
      ============================
      Success Response
      ============================
      */

      return res.status(201).json({
        success: true,

        message:
          "Application submitted successfully",

        data: application,
      });
    } catch (error) {
      console.error(
        "Career Application Error:",
        error
      );

      return res.status(500).json({
        success: false,

        message:
          "Something went wrong",

        error: error.message,
      });
    }
  };

module.exports = {
  submitCareerApplication,
};