const nodemailer = require('nodemailer');

nodemailer.createTransport(
    {
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: 'viktoriia.mykhailova@drillinginfo.com',
            pass: 'Apelsin#1025',
        },
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false,
        },
    }
).sendMail({
    to: 'mihailova.vika@gmail.com',
    from: 'viktoriia.mykhailova@drillinginfo.com',
    subject: 'mail sent with promise!',
    text: 'email test with promise',
}).then(resp => console.log(resp), err => console.log(err));
