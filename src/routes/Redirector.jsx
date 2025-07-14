import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logger from "../logger";

const Redirector = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem(shortcode);
    if (!data) {
      alert("Invalid or expired short URL.");
      logger(`Failed redirect: shortcode ${shortcode} not found`, "ERROR");
      navigate("/");
      return;
    }

    const parsed = JSON.parse(data);
    const now = Date.now();

    if (parsed.expiresAt < now) {
      alert("This short URL has expired.");
      logger(`Failed redirect: shortcode ${shortcode} expired`, "ERROR");
      navigate("/");
      return;
    }

    // Add click log
    const clickInfo = {
      timestamp: new Date().toISOString(),
      source: "localhost",
      location: "India" // For now just mock location
    };

    parsed.clicks.push(clickInfo);
    localStorage.setItem(shortcode, JSON.stringify(parsed));
    logger(`Redirected to: ${parsed.longUrl}`);

    // Redirect
    window.location.href = parsed.longUrl;
  }, [shortcode, navigate]);

  return <h2>Redirecting...</h2>;
};

export default Redirector;
