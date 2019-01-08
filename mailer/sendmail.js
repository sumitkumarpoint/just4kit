var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sumit.k@algowire.com',
        pass: 'Smtkmr12@'
    }
});
function email(data,res) {
    var mailOptions = {
        from: 'sumit.k@algowire.com',
        to: data.email,
        subject: data.subject,
        text: data.text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('contact-us');
        }
    });
}

module.exports = email;