const nodemailer = require('nodemailer');
const {transportMail} = require('./emails');

(async () => {
        let resp;
        try {
            resp = await nodemailer.createTransport(
                {
                    host: 'smtp.gmail.com',
                    auth: {
                        user: transportMail.email,
                        pass: transportMail.password,
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
