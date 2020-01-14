const nodemailer = require('nodemailer');

(async () => {
        let resp;
        try {
            resp = await nodemailer.createTransport(
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
