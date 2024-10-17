require("dotenv").config()
const axios = require('axios');
const { API } = require('faucetpayjs');
const myAPI = new API(process.env.FAUCET_KEY);
// const myAPI = new API(process.env.API_KEY);
myAPI.getBalance().then(data => {
	console.dir(data)
})
const sendPayment = async () => {
    const url = 'https://faucetpay.io/api/v1/send';
    
    // Replace with your actual values
    const apiKey = ""; // Your valid API key
    const amount = "50"; // Amount in satoshis
    const to = 'stabug6@gmail.com'; // Address or email to send payment to
    const currency = 'FEY'; // Optional: Default is BTC
    let referral = false; // Optional: true for referral payment
    let ipAddress = '192.168.1.1'; // Optional: Your IP address

    try {
        const response = await myAPI.send(amount, to, currency, referral=false, ipAddress='0.0.0.0')

        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error sending payment:', error.response ? error.response.data : error.message);
    }
};

sendPayment();