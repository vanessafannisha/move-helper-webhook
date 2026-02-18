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

  // 处理事件（例如：消息接收事件）
  if (req.body.event_type === 'message_received') {
    const eventData = req.body.event; // 获取事件数据
    // 例如：发送消息处理，解析内容，回应等
    console.log("Received message:", eventData);
  }

  // 其他事件类型的处理
  // 在这里可以根据需要进行更多的处理

  res.json({
    ok: true
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Webhook service is running' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
