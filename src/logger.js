 const logger = (message, type = "INFO") => {
  const entry = `[${new Date().toISOString()}] [${type}] ${message}`;
  
  // Save log in localStorage
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(entry);
  localStorage.setItem("logs", JSON.stringify(logs));

  // Optional: Show in UI or export later
};

export default logger;
