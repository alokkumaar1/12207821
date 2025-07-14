# 🔗 URL Shortener Microservice

A robust HTTP URL Shortener Microservice built using **Express.js**. This project supports secure URL shortening, analytics tracking, and remote logging integration with Afford Medical Technologies' evaluation service.

---

## 👤 Made By

**Alok Kumar**  
Student at Lovely Professional University  
📜 Reg No: `12207821`  
🌐 [Portfolio](https://alokkumar.vercel.app)  
🔗 [LinkedIn](https://www.linkedin.com/in/alokkumar48)  
💻 [GitHub](https://github.com/alokkumaar1)

---

## 🚀 Features

- ✂️ **URL Shortening** – Create short URLs with custom or auto-generated shortcodes.
- ⏰ **Expiration** – URL validity can be set (in days) and auto-handled.
- 📡 **Remote Logging** – All logs are sent securely to the evaluation logging service.
- 💎 **Unique Shortcodes** – Globally unique, collision-resistant codes.
- 🛡️ **Security First** – Includes rate limiting, CORS, and headers.
- 💚 **Health Endpoint** – Built-in `/health` status checker.
- 📦 **Modular Architecture** – Routes, services, and middleware are separated cleanly.

---

## ⚙️ Setup & Installation

git clone https://github.com/alokkumaar1/12207821.git
cd 12207821
npm install
npm start
Or use the setup script:


npm run setup
📡 API Endpoints
✅ 1. Health Check
GET /health

Returns the status of the service.

json
Copy
Edit
{
  "status": "OK",
  "timestamp": "2025-07-14T10:00:00Z",
  "service": "URL Shortener Microservice"
}
🔗 2. Create Short URL
POST /shorturls

json
Copy
Edit
{
  "url": "https://www.google.com",
  "validity": 30,
  "shortcode": "goog" // optional
}
Response:

json
Copy
Edit
{
  "shortLink": "http://localhost:3000/goog",
  "expiry": "2025-08-13T10:00:00Z"
}
↪️ 3. Redirect to Original URL
GET /:shortcode

Automatically redirects to the original URL.

📊 4. Get URL Statistics
GET /shorturls/:shortcode

json
Copy
Edit
{
  "shortcode": "goog",
  "originalUrl": "https://www.google.com",
  "createdAt": "...",
  "expiryTime": "...",
  "totalClicks": 3,
  "clicks": [
    {
      "timestamp": "...",
      "referrer": "direct",
      "location": "Unknown"
    }
  ]
}
📝 Logging Middleware Integration
📍 How It Works
Every incoming request and outgoing response is automatically logged.

Logs are securely sent to the Afford Medical Evaluation Service /logs endpoint.

Middleware automatically fetches and refreshes your token when needed.

📄 Sample Log Payload
jsonCopyEdit
{
  "stack": "backend",
  "level": "info",
  "package": "middleware",
  "message": "Incoming request: POST /shorturls"
}
➕ Custom Logs
You can log custom events using:

js

const { Log } = require('./middleware/loggingMiddleware');
Log("backend", "info", "service", "Short URL created successfully");
🧪 Testing
To run the tests:


npm test
📁 Project Structure

12207821/
├── middleware/
│   └── loggingMiddleware.js       # Logs to evaluation service
├── routes/
│   └── urlRoutes.js               # Express API endpoints
├── services/
│   └── urlShortenerService.js     # URL generation and validation logic
├── tests/
│   └── urlShortener.test.js       # Unit tests
├── examples/
│   └── api-example.js             # Example API usage
├── screenshots/
│   └── *.png                      # Screenshots for documentation
├── server.js                      # Entry point
├── package.json                   # NPM config
└── README.md                      # You are here
