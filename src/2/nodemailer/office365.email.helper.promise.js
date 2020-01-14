const nodemailer = require('nodemailer');

nodemailer.createTransport(
    {
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: '',
            pass: '',
        },
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false,
        },
    }
).sendMail({
    to: 'mihailova.vika@gmail.com',
    from: '',
    subject: 'mail sent with promise!',
    text: 'email test with promise',
}).then(resp => console.log(resp), err => console.log(err));
