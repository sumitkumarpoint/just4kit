var express = require('express');
var app = express();
app.post('/send',function (req, res) {
    var data={
        'sender': 'sumitkumarpoint@gmail.com',
        'email': req.body.email,
        'subject': 'contact us by '+req.body.name+'('+req.body.email+')',
        'text': req.body.text,
        'name': req.body.name
    }
    const kitty = new db.ContactUs({ email: data.email,name: data.name,text: data.text });
    kitty.save().then(() => console.log('Document successfully created!'));

    mailer(data,res);
})
module.exports=app