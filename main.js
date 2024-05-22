// const twilio = require('twilio');
// const fs = require('fs');
require('dotenv').config(); 

const accountSid = process.env.TWILIO_SID_ACCOUNT;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendChat = async () => {
  try {
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+6289504753863",
      body: "Hello from Node.js",
    });

    console.log('message sent successfully:', message.sid);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

sendChat();
