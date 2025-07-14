import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Divider,
  Grid,
  Paper,
  Container,
  Chip,
} from "@mui/material";
import logger from "../logger";

const Stats = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    const entries = [];

    allKeys.forEach((key) => {
      try {
        const item = JSON.parse(localStorage.getItem(key));
        if (item && item.longUrl && item.shortcode) {
          entries.push(item);
        }
      } catch (e) {
        logger(`Invalid localStorage data at key: ${key}`, "ERROR");
      }
    });

    setUrls(entries);
    logger("Stats page loaded");
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        🔍 URL Analytics Dashboard
      </Typography>

      {urls.length === 0 ? (
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography>No URLs found.</Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {urls.map((url, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    🔗 Short URL:
                    <Chip
                      label={`http://localhost:3000/${url.shortcode}`}
                      sx={{ ml: 1 }}
                      color="primary"
                      clickable
                    />
                  </Typography>
                  <Typography variant="body1">
                    🌐 <strong>Original URL:</strong> {url.longUrl}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    🕒 <strong>Created At:</strong>{" "}
                    {new Date(url.createdAt).toLocaleString()}
                  </Typography>
                  <Typography variant="body2">
                    ⏳ <strong>Expires At:</strong>{" "}
                    {new Date(url.expiresAt).toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    📈 <strong>Total Clicks:</strong> {url.clicks.length}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle1" gutterBottom>
                    📍 Click Details:
                  </Typography>
                  {url.clicks.length === 0 ? (
                    <Typography variant="body2" color="text.secondary">
                      No clicks yet.
                    </Typography>
                  ) : (
                    url.clicks.map((click, i) => (
                      <Box key={i} sx={{ mb: 1, ml: 2 }}>
                        <Typography variant="body2">
                          • 🕵️‍♂️ {click.timestamp} | 🌍 {click.location} | 🔗{" "}
                          {click.source}
                        </Typography>
                      </Box>
                    ))
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Stats;
