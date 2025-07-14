
import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box
} from "@mui/material";
import logger from "../logger";

const Home = () => {
  const [urlInputs, setUrlInputs] = useState([
    { longUrl: "", validity: "", shortcode: "" },
  ]);
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleInputChange = (index, field, value) => {
    const updated = [...urlInputs];
    updated[index][field] = value;
    setUrlInputs(updated);
  };

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const generateShortcode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };

  const handleShorten = () => {
    const newUrls = [];

    for (const input of urlInputs) {
      const { longUrl, validity, shortcode } = input;

      if (!validateUrl(longUrl)) {
        alert(`Invalid URL: ${longUrl}`);
        logger(`Invalid URL entered: ${longUrl}`, "ERROR");
        return;
      }

      const code = shortcode.trim() !== "" ? shortcode : generateShortcode();
      const now = Date.now();
      const validFor = validity.trim() === "" ? 30 : parseInt(validity);
      const expiry = now + validFor * 60 * 1000;

      const data = {
        longUrl,
        shortcode: code,
        createdAt: now,
        expiresAt: expiry,
        clicks: []
      };

      localStorage.setItem(code, JSON.stringify(data));
      logger(`Created short URL: ${code} → ${longUrl}`);

      newUrls.push({ ...data });
    }

    setShortenedUrls(newUrls);
  };

  const handleAddInput = () => {
    if (urlInputs.length < 5) {
      setUrlInputs([...urlInputs, { longUrl: "", validity: "", shortcode: "" }]);
    } else {
      alert("You can only shorten up to 5 URLs at once.");
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>

      {urlInputs.map((input, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Long URL"
                  value={input.longUrl}
                  onChange={(e) => handleInputChange(index, "longUrl", e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  fullWidth
                  label="Validity (minutes)"
                  type="number"
                  value={input.validity}
                  onChange={(e) => handleInputChange(index, "validity", e.target.value)}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  fullWidth
                  label="Custom Shortcode"
                  value={input.shortcode}
                  onChange={(e) => handleInputChange(index, "shortcode", e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      <Button variant="outlined" onClick={handleAddInput} sx={{ mr: 2 }}>
        + Add Another URL
      </Button>

      <Button variant="contained" color="primary" onClick={handleShorten}>
        Shorten URLs
      </Button>

      <Box mt={4}>
        {shortenedUrls.map((item, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography><strong>Short URL:</strong> http://localhost:3000/{item.shortcode}</Typography>
              <Typography><strong>Expires At:</strong> {new Date(item.expiresAt).toLocaleString()}</Typography>
              <Typography><strong>Original:</strong> {item.longUrl}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
