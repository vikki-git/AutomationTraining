const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key:
                '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'
        }
    })
);

const transportConfig = {
    host: 'imap.gmail.com',
    auth: {
        user: 'mihailova.vika@gmail.com',
        pass: 'shuchka123',
    },
}

const sendEmailData = {
    to: 'mihailova.vika@gmail.com',
    from: 'vikulya@gmail.com',
    subject: 'mail sent!',
    text: 'email test',
};

const sendEmail = ({sendEmailData, transporter}) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(sendEmailData, async (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};

sendEmail(sendEmailData, transporter)
    .then(resp => console.log(resp), err => console.log(err));