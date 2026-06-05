const transporter = require("../config/mailer");

const sendCareerApplicationToHR = async (
  applicant,
  resumePath
) => {
  const {
    fullName,
    email,
    phone,
    course,
    branch,
    role,
  } = applicant;

  await transporter.sendMail({
    from: `"Kartsho Career Portal" <${process.env.EMAIL_USER}>`,

    to: process.env.HR_EMAIL,

    subject: `New Job Application - ${role}`,

    html: `
      <div style="font-family:Arial,sans-serif;">
        <h2>New Career Application Received</h2>

        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><strong>Full Name</strong></td>
            <td>${fullName}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Course</strong></td>
            <td>${course}</td>
          </tr>

          <tr>
            <td><strong>Branch</strong></td>
            <td>${branch}</td>
          </tr>

          <tr>
            <td><strong>Applied Role</strong></td>
            <td>${role}</td>
          </tr>
        </table>

        <br/>

        <p>
          Resume attached with this email.
        </p>
      </div>
    `,

    attachments: [
      {
        filename: "Resume.pdf",
        path: resumePath,
      },
    ],
  });
};

const sendCandidateConfirmationEmail =
  async (applicant) => {
    await transporter.sendMail({
      from: `"Kartsho Solutions Pvt. Ltd." <${process.env.EMAIL_USER}>`,

      to: applicant.email,

      subject:
        "Application Received Successfully",

      html: `
        <div style="font-family:Arial,sans-serif;">
          <h2>Thank You ${applicant.fullName}</h2>

          <p>
            We have successfully received your
            application for the role of
            <strong>${applicant.role}</strong>.
          </p>

          <p>
            Our HR team will review your profile
            and contact you if your application
            matches our requirements.
          </p>

          <br/>

          <p>
            Regards,
            <br/>
            Kartsho HR Team
          </p>
        </div>
      `,
    });
  };

module.exports = {
  sendCareerApplicationToHR,
  sendCandidateConfirmationEmail,
};