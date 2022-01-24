require("dotenv").config();

console.log(process.env.PASSWORD);

const config = {
	user: process.env.USER,
	password: process.env.PASSWORD,
	server: "127.0.0.1",
	database: "Movetez",
	options: {
		trustedconnection: true,
		enableArithAbort: true,
		instancename: "SQLEXPRESS",
	},
	port: 55892,
};

module.exports = config;
