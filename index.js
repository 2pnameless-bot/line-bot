const express = require('express');
const { Client, middleware } = require('@line/bot-sdk');

const config = {
  channelAccessToken: '3tUMVhDFHFwDXFjoIOC5ceS/k5v0SmO+zreKP+8ylDrwPBuRCsKbuSJUwNYH1ldWzfIZPkpWNIhX6xYjuYhsQAUW12fChQ7MnapuHZN3AiysQmw/TmZ2WUrEKEvgjjyffU2FBetkncaViZjoNlqupAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '48191acd1ad80d1343db0e05dd2e7124'
};

const app = express();
const client = new Client(config);

app.post('/webhook', middleware(config), async (req, res) => {
  const events = req.body.events;

  // ตอบกลับ LINE เพื่อบอกว่า "รับ webhook แล้ว"
  res.sendStatus(200);

  for (const event of events) {
    const userId = event.source.userId;

    // ถ้าเป็นข้อความ → ให้ตอบกลับตามที่คุณต้องการ
    if (event.type === 'message' && event.message.type === 'text') {
      await client.replyMessage(event.replyToken, {
        type: 'text',
        text: 'เราคือระบบ bot เราจะส่งข้อความเฉพาะเมื่อมีเหตุการณ์'
      });
    }
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
