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

  res.sendStatus(200);

  for (const event of events) {
    console.log("USER ID:", event.source.userId);
  }
});

// ***** แก้ตรงนี้! Render ต้องใช้ process.env.PORT *****
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
