const nodemailer = require('nodemailer');

const mail = (mailDetails) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASSWORD
        }
    });

    const { emailId, title, concern, subject, } = mailDetails;

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: process.env.EMAIL_ID, // sender address
        to: emailId, // list of receivers
        subject: subject, // Subject line
        // plain text body
        html: `<h5>Title:${title}</h5>
            <p>Concern: ${concern}</p>` // html body
    });

}

module.exports = mail;