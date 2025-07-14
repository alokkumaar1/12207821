// server.js
const express = require("express");
const { loggingMiddleware, Log } = require("./logger");

const app = express();
app.use(express.json());
app.use(loggingMiddleware);

app.get("/api/ping", (req, res) => {
  Log("backend", "info", "route", "Ping route accessed");
  res.json({ message: "pong" });
});

const PORT = 3001;
app.listen(PORT, () => {
  Log("backend", "info", "server", `Server running on http://localhost:${PORT}`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
