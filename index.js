const express = require('express');
const app = express();

app.use(express.json());

// 飞书事件接收
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

// 健康检查
app.get('/', (req, res) => {
  res.json({
    ok: true,
    service: "move-helper-webhook"
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port", port);
});
