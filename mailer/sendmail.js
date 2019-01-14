var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'help20four7@gmail.com',
        pass: 'Smtkmr12@'
    }
});
function email(data,res) {
    var mailOptions = {
        from: 'sumitkumarpoint@gmail.com',
        to: '1516514008@kit.ac.in,1516514010@kit.ac.in,1516514030@kit.ac.in,1516514031@kit.ac.in,1516514032@kit.ac.in,1516514036@kit.ac.in',
        bcc: data.sender,
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