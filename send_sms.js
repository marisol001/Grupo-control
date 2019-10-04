require('dotenv').config()

var twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = new twilio(accountSid, authToken)

var phones = ['whatsapp:+5215574852528','whatsapp:+5215517879903','whatsapp:+5215611513555']

for(phone of phones) {
    client.messages
    .create({
       mediaUrl: ['https://iessanvicente.com/colaboraciones/oracle.pdf'],
       from: 'whatsapp:+14155238886',
       body: `This file is for testing `,
       to: phone
     })
    .then(message => console.log(message.sid));  
}

  
// 


