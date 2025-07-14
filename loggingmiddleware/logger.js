// logger.js
const fetch = require("node-fetch");

// Evaluation server URLs
const EVAL_AUTH_URL = 'http://20.244.56.144/evaluation-service/auth';
const EVAL_LOG_URL = 'http://20.244.56.144/evaluation-service/logs';

// Your credentials
const EVAL_CREDENTIALS = {
  email: 'alokkumar82473@gmail.com',
  name: 'Alok Kumar',
  rollNo: '12207821',
  accessCode: 'CZypQK',
  clientID: 'd31e9d1b-5c25-49ee-9018-4bcaaf54cf71',
  clientSecret: 'njgaSUVKeUtVCdRX'
};

let cachedToken = null;
let tokenExpiry = 0;

// Get Auth Token
async function getAuthToken() {
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && tokenExpiry > now + 60) return cachedToken;

  const res = await fetch(EVAL_AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(EVAL_CREDENTIALS)
  });

  const data = await res.json();
  cachedToken = data['access_token'] || data['access token'];
  tokenExpiry = data['expires_in'] || (now + 3600);
  return cachedToken;
}

// Send log
async function sendLog({ stack, level, pkg, message }) {
  try {
    const token = await getAuthToken();
    await fetch(EVAL_LOG_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ stack, level, package: pkg, message })
    });
  } catch (err) {
    console.error("❌ Failed to send log:", err.message);
  }
}

// Exported log function
function Log(stack, level, pkg, message) {
  sendLog({ stack, level, pkg, message });
}

// Express middleware
const loggingMiddleware = (req, res, next) => {
  const start = Date.now();
  Log("backend", "info", "middleware", `➡️ ${req.method} ${req.url}`);

  const originalEnd = res.end;
  res.end = function (chunk, encoding) {
    const duration = Date.now() - start;
    Log("backend", "info", "middleware", `✅ ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
    originalEnd.call(this, chunk, encoding);
  };
  next();
};

module.exports = { loggingMiddleware, Log };
