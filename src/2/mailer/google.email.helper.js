const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// const transporter = nodemailer.createTransport(
//     {
//         host: 'imap.gmail.com',
//         auth: {
//             user: 'mihailova.vika@gmail.com',
//             pass: 'shuchka123',
//         },
//     }
// );
//
// const transportConfig = {
//     host: 'imap.gmail.com',
//     auth: {
//         user: 'mihailova.vika@gmail.com',
//         pass: 'shuchka123',
//     },
// }
// vtlgjgtkxfjdljzn

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        nodemailer.createTransport(
            {
                host: 'smtp.gmail.com',
                auth: {
                    user: 'mihailova.vika@gmail.com',
                    pass: 'bxpxxiycfmyyydfi',
                },
            }
        ).sendMail({
            to: 'mihailova.vika@gmail.com',
            from: 'mihailova.vika@gmail.com',
            subject: 'mail sent!',
            text: 'email test',
        }, async (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};

sendEmail()
    .then(resp => console.log(resp), err => console.log(err));
