require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

/*
=================================
Start Server
=================================
*/

const startServer = async () => {
  try {
    /*
    ============================
    Connect Database
    ============================
    */
    await connectDB();

    /*
    ============================
    Start Express Server
    ============================
    */
    const server = app.listen(PORT, () => {
      console.log(`
=================================
🚀 Server Running Successfully
🌐 Port : ${PORT}
🛠️ Mode : ${process.env.NODE_ENV}
=================================
      `);
    });

    /*
    ============================
    Unhandled Promise Rejection
    ============================
    */
    process.on(
      "unhandledRejection",
      (error) => {
        console.error(`
=================================
❌ Unhandled Rejection
${error.message}
=================================
        `);

        server.close(() => {
          process.exit(1);
        });
      }
    );
  } catch (error) {
    console.error(`
=================================
❌ Server Startup Failed
${error.message}
=================================
    `);

    process.exit(1);
  }
};

/*
=================================
Uncaught Exception
=================================
*/

process.on(
  "uncaughtException",
  (error) => {
    console.error(`
=================================
❌ Uncaught Exception
${error.message}
=================================
    `);

    process.exit(1);
  }
);

startServer();