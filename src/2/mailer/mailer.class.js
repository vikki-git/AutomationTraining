"use strict";
const nodemailer = require("nodemailer");

class Mailer {
    constructor({ sendEmailData, emailTransportConfig }) {
        this.sendEmailData = sendEmailData;
        this.emailTransportConfig = emailTransportConfig;
    }
    async sendEmail() {
        return new Promise((resolve, reject) => {
            this.smtpTransport = nodemailer.createTransport(this.emailTransportConfig);
            this.smtpTransport.sendMail(this.sendEmailData, async (error, info) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(info);
                }
                this.smtpTransport.close();
            });
        });
    }
}
exports.Mailer = Mailer;
