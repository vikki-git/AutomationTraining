const nodemailer = require('nodemailer');

const sendEmailData = {
    to: 'mihailova.vika@gmail.com',
    from: 'viktoriia.mykhailova@drillinginfo.com',
    subject: 'mail sent!',
    text: 'email test',
};

const sendEmail = ({sendEmailData}) => {
    return new Promise((resolve, reject) => {
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
        }, async (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};

sendEmail(sendEmailData)
    .then(resp => console.log(resp), err => console.log(err));
