const { Router } = require('express');
const app = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
app.post('/new', (req, res) => {
    res.render('form')    
})

app.get('/', (req,res) => {
    // res.render("index", { title: "Mini Messageboard", messages: messages })})
    res.render('index', {messages: messages})
})

module.exports = app