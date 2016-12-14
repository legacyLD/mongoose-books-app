var mongoose = require("mongoose");

// use native JS promise library instead of Mongoose's deprecated one
mongoose.Promise = global.Promise;

// connect to the localhost book-app database
// mongoose.connect("mongodb://localhost/book-app");
// server.js
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find(function(err, books){
    if (err) { return console.log("index error: " + err); }
    res.json(books);
  });
});

// models/index.js
module.exports.Book = require("./book.js");
