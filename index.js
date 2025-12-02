const express = require('express');
const { Client, middleware } = require('@line/bot-sdk');

const config = {
  channelAccessToken: '3tUMVhDFHFwDXFjoIOC5ceS/k5v0SmO+zreKP+8ylDrwPBuRCsKbuSJUwNYH1ldWzfIZPkpWNIhX6xYjuYhsQAUW12fChQ7MnapuHZN3AiysQmw/TmZ2WUrEKEvgjjyffU2FBetkncaViZjoNlqupAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '48191acd1ad80d1343db0e05dd2e7124'
};

const app = express();
const client = new Client(config);

// Webhook
app.post('/webhook', middleware(config), async (req, res) => {
  res.sendStatus(200); // ตอบ LINE ก่อน

  const events = req.body.events;

  for (const event of events) {
    console.log("USER ID:", event.source.userId);

    // เช็คว่าเป็นข้อความหรือไม่
    if (event.type === 'message' && event.message.type === 'text') {
      await client.replyMessage(event.replyToken, {
        type: 'text',
        text: "เราคือระบบ bot เราจะส่งข้อความเฉพาะเมื่อมีเหตุการณ์"
      });
    }
  }
});

// ใช้ PORT ของ Render
app.listen(process.env.PORT || 3000, () => {
  console.log('Server running...');
});
