require("dotenv").config()
const { API } = require('FaucetPayJS');
const myAPI = new API(process.env.API_KEY);
myAPI.getBalance().then(data => {
	console.dir(data)
})