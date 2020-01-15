const nodemailer = require('nodemailer');
const {transportMail} = require('./emails');

nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        auth: {
            user: transportMail.email,
            pass: transportMail.password,
        },
    }
).sendMail({
    to: 'mihailova.vika@gmail.com',
    from: transportMail.email,
    subject: 'mail sent with callback!',
    text: 'email test with callback',
}, (err, resp) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(resp);
});
