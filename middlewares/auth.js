const jwt = require("jsonwebtoken");
require("dotenv").config();

// Fonction pour générer un token unique
module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, `${process.env.SECRET_TOKEN}`);
		const userId = decodedToken.userId; //token decodé
		res.locals.userId = userId;
		if (req.body.userId && req.body.userId !== userId) {
			throw "Invalid user ID";
		} else {
			next();
		}
	} catch {
		res.status(401).json({
			error: new Error("Invalid request!"),
		});
	}
};