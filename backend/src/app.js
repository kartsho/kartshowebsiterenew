const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const careerRoutes = require("./routes/career.routes");

const app = express();

/*
=================================
Security Middleware
=================================
*/

app.use(helmet());

/*
=================================
CORS Configuration
=================================
*/

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://kartsho.com",
  "https://www.kartsho.com",
  "http://localhost:5173",
  "http://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error(
          `CORS blocked for origin: ${origin}`
        )
      );
    },
    credentials: true,
  })
);

/*
=================================
Body Parsers
=================================
*/

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/*
=================================
Static Files
=================================
*/

app.use(
  "/uploads",
  express.static("uploads")
);

/*
=================================
Logger
=================================
*/

if (
  process.env.NODE_ENV ===
  "development"
) {
  app.use(morgan("dev"));
}

/*
=================================
Health Check Route
=================================
*/

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message:
      "Kartsho Career Backend Running 🚀",
  });
});

/*
=================================
API Routes
=================================
*/

app.use(
  "/api/careers",
  careerRoutes
);

/*
=================================
404 Route Handler
=================================
*/

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;
