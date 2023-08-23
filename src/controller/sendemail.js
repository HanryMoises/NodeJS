require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = async (texto,assunto,to) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST, //define o endereço do servidor SMTP que o Nodemailer usará para enviar e-mails. O "smtp-relay.brevo.com" é o servidor SMTP fornecido pelo serviço "Brevo".
        port: process.env.EMAIL_PORT,
        // secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const Enviaremail = async () => {
        const mailsent = await transporter.sendMail({
            text: texto,
            subject: assunto,
            from: "hanrymoisesdev@gmail.com",
            to: to
            // to: to.map((e)=>{}), //mais de um email
        })
        console.log(mailsent); //visualiza se o e-mail foi enviado
    }

    Enviaremail();

}