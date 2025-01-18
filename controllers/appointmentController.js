const nodemailer = require('nodemailer');
const Appointment = require('../models/Appointment');

// Setup nodemailer transporter (using Gmail SMTP for this example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', // Your email
    pass: '',   // Your email password or App Password if 2FA enabled
  },
});

// Handle form submission and send email
exports.createAppointment = async (req, res) => {
  const { name, email, phone, doctor, date, time } = req.body;

  try {
    // Save appointment to database
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      doctor,
      date,
      time,
    });

    await newAppointment.save();

    // Construct the email content
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'doctor-email@example.com', // The doctor's email
      subject: 'New Appointment Request',
      text: `
        You have a new appointment request:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Doctor: ${doctor}
        Date: ${date}
        Time: ${time}
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to send email', error: err });
      }
      res.status(200).json({ message: 'Appointment request submitted successfully' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create appointment', error: err });
  }
};
