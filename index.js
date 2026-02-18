const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {

  // 飞书验证 challenge
  if (req.body.challenge) {
    return res.json({
      challenge: req.body.challenge
    });
  }

  console.log("Received event:", req.body);

  res.json({
    ok: true
  });
});

app.get('/', (req, res) => {
  res.json({
