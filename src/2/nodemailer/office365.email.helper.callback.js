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
    subject: 'mail sent with callback!',
    text: 'email test with callback',
}, (err, resp) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(resp);
});
