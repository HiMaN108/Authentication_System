import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import dotenv from 'dotenv';

dotenv.config();

<<<<<<< HEAD

// https://ethereal.email/create
let nodeConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
    }
}

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
    theme: "default",
    product : {
        name: "Mailgen",
        link: 'https://mailgen.js/'
    }
})

/** POST: http://localhost:8080/api/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
export const registerMail = async (req, res) => {
    const { username, userEmail, text, subject } = req.body;

    // body of the email
    var email = {
        body : {
            name: username,
            intro : text || 'Welcome to mylogin page system! We\'re very excited to have you on board.',
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }

    var emailBody = MailGenerator.generate(email);

    let message = {
        from : process.env.EMAIL,
        to: userEmail,
        subject : subject || "Signup Successful",
        html : emailBody
    }

    // send mail
    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "You should receive an email from us."})
        })
        .catch(error => res.status(500).send({ error }))

}
=======
// Email transporter configuration
const nodeConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // false for TLS - as ethereal uses STARTTLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  }
};

const transporter = nodemailer.createTransport(nodeConfig);

const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/"
  }
});

/**
 * POST: http://localhost:8080/api/registerMail
 * @param: {
 *  "username": "example123",
 *  "userEmail": "admin123@example.com",
 *  "text": "Welcome to our platform!",
 *  "subject": "Signup Successful"
 * }
 */
export const registerMail = async (req, res) => {
  try {
    const { username, userEmail, text, subject } = req.body;

    if (!username || !userEmail) {
      return res.status(400).json({ error: "Username and userEmail are required." });
    }

    // Email content
    const email = {
      body: {
        name: username,
        intro: text || "Welcome to mylogin page system! We're excited to have you onboard.",
        outro: "Need help or have questions? Just reply to this email — we'd love to help."
      }
    };

    const emailBody = mailGenerator.generate(email);

    // Email message details
    const message = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: subject || "Signup Successful",
      html: emailBody
    };

    // Send email
    await transporter.sendMail(message);
    return res.status(200).json({ msg: "You should receive an email from us." });

  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
>>>>>>> 532b58b33b4f7b0a0caa0ea6c5035b1ac5da9183
