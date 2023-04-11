const mongoose = require("mongoose");
require("dotenv").config();

dbConnect().catch((err) => console.log({ message: err }));

const Port = process.env.CONNECTION_A_LA_DB

async function dbConnect() {
	await mongoose.connect(`${process.env.CONNECTION_A_LA_DB}`);
	console.log("connected to: " + Port);
}