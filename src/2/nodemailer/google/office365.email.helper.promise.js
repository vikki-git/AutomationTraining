const nodemailer = require('nodemailer');
const {transportMail} = require('./emails');

nodemailer.createTransport(
    {
        host: 'smtp.office365.com',
        auth: {
            user: transportMail.email,
            pass: transportMail.password,
        },
    }
).sendMail({
    to: 'mihailova.vika@gmail.com',
    from: transportMail.email,
    subject: 'mail sent with promise!',
    text: 'email test with promise',
}).then(resp => console.log(resp), err => console.log(err));
