const nodemailer = require('nodemailer');

const mail = (mailDetails) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASSWORD
        }
    });

    const { issueId, attachment, department, name, emailId, title, concern, subject, } = mailDetails;

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: process.env.EMAIL_ID, // sender address
        to: emailId, // list of receivers
        subject: subject, // Subject line

        // plain text body
        html: `<table>
        <tr>
            <th>Issue Id</th>
            <td>${issueId}</td>
        </tr>
        <tr>
            <th>Title</th>
            <td>${title}</td>
        </tr>
        <tr>
            <th>concern</th>
            <td>${concern}</td>
        </tr>
    </table>` // html body
    });

}

module.exports = mail;