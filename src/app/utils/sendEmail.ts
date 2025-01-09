import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'hasanhridoymahabub9@gmail.com',
      pass: 'zrrc hnbm zgoz stlv',
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: 'hasanhridoymahabub9@gmail.com', // sender address
    to, // list of receivers
    subject: 'Password reset request for phUniversity', // Subject line
    text: 'Change your password', // plain text body
    html, // html body
  });
};
