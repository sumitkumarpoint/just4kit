var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sumit.k@algowire.com',
        pass: 'Smtkmr12@'
    }
});
function email(data) {
    var mailOptions = {
        from: 'sumit.k@algowire.com',
        to: 'sumitkumarpoint@gmail.com',
        subject: data.subject,
        text: data.text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = email;