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
    subject: 'mail sent with promise!',
    text: 'email test with promise',
}).then(resp => console.log(resp), err => console.log(err));
