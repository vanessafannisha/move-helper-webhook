const express = require("express");

const app = express();
app.use(express.json({ limit: "2mb" }));

// 健康检查（浏览器打开时）
app.get("/", (req, res) => {
  res.json({ ok: true, service: "move-helper-webhook" });
});

// 飞书回调入口
app.post("/", (req, res) => {
  console.log("Incoming request body:", JSON.stringify(req.body));

  // 先简单返回 JSON，避免“不是合法 JSON”报错
  res.json({ ok: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
