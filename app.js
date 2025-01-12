const express = require('express')
const app = express()
const PORT = 3000;

//for EJS || templating
const path = require("node:path"); //import path module of Node.js
app.set("views", path.join(__dirname, "views")); // sets the directory where the application's view templates are stored.
app.set("view engine", "ejs"); // sets the view engine to "ejs", telling the application to use EJS for rendering templates.


const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

app.use("/", indexRouter);
app.use("/new", newRouter);


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})