const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const config = require("./db/config");

// middlewares 
const auth = require("./middlewares/auth") ;
const middlewarePost = require("./middlewares/post");

// Routes 
const route_user = require("./routes/route_user");
const route_post = require("./routes/route_post");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes = users
app.use("/api/auth",auth, route_user);
app.use("/api/posts",middlewarePost, route_post);

// init server
app.listen(3000, () => {
	console.log("Server is running on port : 0.0.0.3000");
});