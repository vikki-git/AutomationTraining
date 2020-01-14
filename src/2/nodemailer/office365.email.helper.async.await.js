const nodemailer = require('nodemailer');

(async () => {
        let resp;
        try {
            resp = await nodemailer.createTransport(
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
