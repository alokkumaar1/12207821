// src/log.js

const log = async (stack, level, pkg, message) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbG9ra3VtYXI4MjQ3M0BnbWFpbC5jb20iLCJuYW1lIjoiYWxvayBrdW1hciIsInJvbGxObyI6IjEyMjA3ODIxIiwiYWNjZXNzQ29kZSI6IkNaeXBRSyIsImNsaWVudElEIjoiZDMxZTlkMWItNWMyNS00OWVlLTkwMTgtNGJjYWFmNTRjZjcxIiwiY2xpZW50U2VjcmV0IjoibmpnYVNVVktlVXRWQ2RSWCJ9LCJpYXQiOjE3MTE4MzgxNzYsImV4cCI6MTc0MzM3Mzc3Nn0.3IzsAe5S_3BiNn3Hq5MQF9IopADrg4aI4mvzXqkPG4g";

  const logPayload = {
    stack,
    level,
    package: pkg,
    message,
  };

  try {
    const res = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(logPayload),
    });

    const data = await res.json();
    console.log("✅ Log submitted:", data);
  } catch (err) {
    console.error("❌ Log submission failed:", err);
  }
};

export default log;
