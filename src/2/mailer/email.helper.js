const nodemailer = require('nodemailer');
const sendblueTransport = require('nodemailer-sendinblue-transport');
//
// const transporter = nodemailer.createTransport(
//     sendgridTransport({
//         auth: {
//             api_key:
//                 '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'
//         }
//     })
// );

// const sendEmailData = {
//     to: 'mihailova.vika@gmail.com',
//     from: 'vikulya@gmail.com',
//     subject: 'mail sent!',
//     text: 'email test',
// };

// transporter.sendMail({
//     to: 'mihailova.vika@gmail.com',
//     from: 'vikulya@gmail.com',
//     subject: 'mail sent!',
//     text: 'email test',
//     html: '<h1>Your email successfully sent!</h1>'
// }).then(resp => console.log(resp),
//     err => console.log(err));


// const sendEmail = ({sendEmailData, emailTransportConfig}) => {
//     return new Promise((resolve, reject) => {
//         createTransport(emailTransportConfig).sendMail(sendEmailData, async (error, info) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(info);
//             }
//         });
//     });
// };

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        nodemailer.createTransport(
            sendblueTransport({
                apiKey:
                    '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'
            })
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
