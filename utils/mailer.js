import { transporter } from '../Config/emailConfig.js';

const sendEmail = async (to, subject, text) => { 
    try {
        const mailOptions = {
            from: process.env.EMAIL,
            to,
            subject,
            text,
        }
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log("Error sending email: ", error.message);
    }
};

export default sendEmail;