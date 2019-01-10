var mongoose = require('mongoose');
var express = require('express');
var app = express();

var Schema = new mongoose.Schema({
        email       : String,
        name    : String,
        text: String
    }),

    Contact = mongoose.model('ContactUs', Schema);
mongoose.connect('mongodb://example:example@ds053312.mongolab.com:53312/todolist', function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});


// app.get('/api/todos', function (req, res) {
//     // http://mongoosejs.com/docs/api.html#query_Query-find
//     Users.find( function ( err, todos ){
//         res.json(200, todos);
//     });
// })
// const Cat = mongoose.model('Cat', { name: String });
function create(data) {
    const kitty = new Contact({ email: data.email,name: data.name,text: data.text });
    kitty.save().then(() => console.log('meow'));
}

function save(data) {
    const kitty = new Contact({ email: data.email,name: data.name,text: data.text });
    kitty.save().then(() => console.log('meow'));
}
module.exports={save:save,create:create}
