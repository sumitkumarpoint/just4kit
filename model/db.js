var mongoose = require('mongoose');
var express = require('express');
var app = express();
mongoose.connect('mongodb://example:example@ds053312.mongolab.com:53312/todolist', function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});


var ContactUs_Schema = new mongoose.Schema({
        email       : String,
        name    : String,
        text: String
    }),

    ContactUs = mongoose.model('ContactUs', ContactUs_Schema);

var User_Schema = new mongoose.Schema({
        email       : String,
        name    : String,
        password: String
    }),

    User = mongoose.model('User', User_Schema);


module.exports={ContactUs:ContactUs,User:User};

// app.get('/api/todos', function (req, res) {
//     // http://mongoosejs.com/docs/api.html#query_Query-find
//     Users.find( function ( err, todos ){
//         res.json(200, todos);
//     });
// })
// const Cat = mongoose.model('Cat', { name: String });



// function create(data) {
//     const kitty = new Contact({ email: data.email,name: data.name,text: data.text });
//     kitty.save().then(() => console.log('meow'));
// }
//
// function save(data) {
//     const kitty = new Contact({ email: data.email,name: data.name,text: data.text });
//     kitty.save().then(() => console.log('meow'));
// }
// module.exports={save:save,create:create}
