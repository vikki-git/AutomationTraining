const nodemailer = require('nodemailer');
const {transportMail} = require('./emails');

nodemailer.createTransport(
    {
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: transportMail.email,
            pass: transportMail.password,
        },
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false,
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
