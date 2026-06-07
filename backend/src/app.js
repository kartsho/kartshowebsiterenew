const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

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

const extraOrigins = String(
  process.env.FRONTEND_URLS || ""
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://kartsho.com",
  "https://www.kartsho.com",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  ...extraOrigins,
].filter(Boolean);

const isLocalDevOrigin = (origin) => {
  try {
    const { hostname } = new URL(origin);

    return [
      "localhost",
      "127.0.0.1",
      "::1",
    ].includes(hostname);
  } catch {
    return false;
  }
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        allowedOrigins.includes(origin) ||
        isLocalDevOrigin(origin)
      ) {
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
  express.static(
    path.join(__dirname, "../uploads")
  )
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
