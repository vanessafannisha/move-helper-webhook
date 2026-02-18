const express = require('express');
const app = express();

// 使用中间件解析 JSON 请求
app.use(express.json());

// 处理飞书事件回调
app.post('/', (req, res) => {

  // 验证飞书发送的 challenge
  if (req.body.challenge) {
    return res.json({
      challenge: req.body.challenge  // 返回 challenge 进行验证
    });
  }

  // 获取飞书事件数据
  const event = req.body.event;
  console.log("Received event:", event);

  // 处理收到的事件
  if (event && event.text && event.text.toLowerCase() === 'openclaw') {
    // 如果接收到的消息是 "openclaw"，执行后台操作
    console.log('Executing backend operation for openclaw...');
    
    // 执行你需要的操作，调用其他API或执行任务
    // 例如，调用一个函数处理事件
    // backendOperation();
    
    // 返回响应
    res.json({
      message: 'openclaw command received and processed.'
    });
  } else {
    // 处理其他消息
    res.json({
      message: 'No relevant command received.'
    });
  }
});

// 健康检查接口
app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    service: 'move-helper-webhook'
  });
});

// 启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
