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

  // ให้ LINE รู้ว่าเรารับข้อมูลแล้ว (สำคัญ!)
  res.sendStatus(200);

  for (const event of events) {
    const userId = event.source.userId;
    console.log("USER ID:", userId);

    // ไม่ส่งข้อความกลับใด ๆ ทั้งสิ้น
    // อยากเก็บข้อมูล ลดคำตอบ หรือประมวลผลเองเพิ่มได้ในส่วนนี้
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
