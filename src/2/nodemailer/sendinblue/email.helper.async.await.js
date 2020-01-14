const nodemailer = require('nodemailer');
const {transportMail} = require('./emails');

(async () => {
        let resp;
        try {
            resp = await nodemailer.createTransport(
                {
                    host: 'smtp-relay.sendinblue.com',
                    port: 587,
                    auth: {
                        user: transportMail.email,
                        pass: transportMail.password,
                    },
                    secureConnection: false,
                    tls: {
                        ciphers: 'SSLv3',
                        rejectUnauthorized: false,
                    },
                }
            ).sendMail({
                to: 'mihailova.vika@gmail.com',
                from: transportMail.email,
                subject: 'mail sent with async-await!',
                text: 'email test with async-await',
            })
        } catch (err) {
            console.log(err);
        } finally {
            console.log(`RESPONSE: ${JSON.stringify(resp)}`);
        }
    }
)();

// (async () => {
//     }
//
// )();
