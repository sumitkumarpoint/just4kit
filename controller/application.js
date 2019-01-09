var mongoose = require('mongoose');
var express = require('express');
var app = express();

var Schema = new mongoose.Schema({
        id       : String,
        title    : String,
        completed: Boolean
    }),

    Users = mongoose.model('User', Schema);
mongoose.connect('mongodb://example:example@ds053312.mongolab.com:53312/todolist', function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});


app.get('/api/todos', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    Users.find( function ( err, todos ){
        res.json(200, todos);
    });
})
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

