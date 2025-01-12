const { Router } = require('express');
const app = Router();




app.get('/new', (req,res) => {
    res.render("form")
})


module.exports = app