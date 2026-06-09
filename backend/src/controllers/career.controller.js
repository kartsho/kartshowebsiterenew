const mongoose = require("mongoose");

const Career = require("../models/Career");

const {
  sendCareerApplicationToHR,
  sendCandidateConfirmationEmail,
} = require("../services/email.service");

const submitCareerApplication =
  async (req, res) => {
    try {
      if (mongoose.connection.readyState !== 1) {
        console.log("Career Form Hit");

        return res.status(200).json({
          success: true,
          message: "Application Submitted",
        });
      }

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

      const mailWarnings = [];

      /*
      ============================
      Send Mail To HR
      ============================
      */

      try {
        await sendCareerApplicationToHR(
          application,
          req.file.path
        );
      } catch (emailError) {
        console.error(
          "HR Email Failed:",
          emailError
        );

        mailWarnings.push(
          "HR notification email failed"
        );
      }

      /*
      ============================
      Send Confirmation Mail
      ============================
      */

      try {
        await sendCandidateConfirmationEmail(
          application
        );
      } catch (emailError) {
        console.error(
          "Candidate Email Failed:",
          emailError
        );

        mailWarnings.push(
          "Candidate confirmation email failed"
        );
      }

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
        warnings:
          mailWarnings.length > 0
            ? mailWarnings
            : undefined,
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
