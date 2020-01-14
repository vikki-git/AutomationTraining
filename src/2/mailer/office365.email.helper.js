const nodemailer = require('nodemailer');

const sendEmail = async () => {
       await nodemailer.createTransport(
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
            subject: 'mail sent!',
            text: 'email test',
        });
};

sendEmail()
    .then(resp => console.log(resp), err => console.log(err));
