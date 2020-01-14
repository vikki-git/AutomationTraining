const nodemailer = require('nodemailer');

// const sendEmail = async () => {
//        await nodemailer.createTransport(
//             {
//                 host: 'smtp.office365.com',
//                 port: 587,
//                 auth: {
//                     user: 'viktoriia.mykhailova@drillinginfo.com',
//                     pass: 'Apelsin#1025',
//                 },
//                 secureConnection: false,
//                 tls: {
//                     ciphers: 'SSLv3',
//                     rejectUnauthorized: false,
//                 },
//             }
//         ).sendMail({
//             to: 'mihailova.vika@gmail.com',
//             from: 'viktoriia.mykhailova@drillinginfo.com',
//             subject: 'mail sent!',
//             text: 'email test',
//         });
// };
//
// sendEmail()
//     .then(resp => console.log(resp), err => console.log(err));

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
    subject: 'mail sent!',
    text: 'email test',
}).then(resp => console.log(resp), err => console.log(err));
