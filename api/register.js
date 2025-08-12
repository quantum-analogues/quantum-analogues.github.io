const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, affiliation, position, research, days, lunches, dietary } = req.body;

    // Format the registration details for emails
    const details = `
Full Name: ${fullName}
Email: ${email}
Affiliation: ${affiliation}
Position/Title: ${position}
Research & Motivation: ${research || 'Not provided'}
Days Attending: ${Array.isArray(days) ? days.join(', ') : days || 'None selected'}
Lunches: ${Array.isArray(lunches) ? lunches.join(', ') : lunches || 'None selected'}
Dietary Preference: ${dietary || 'No Preference'}
    `;

    try {
      // Set up Gmail transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });

      // Send notification to organizers (using the same Gmail or replace with another email)
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // Or change to a different organizer email if needed
        subject: 'New Registration for Quantum Analogues Workshop',
        text: `A new registration has been submitted:\n\n${details}`
      });

      // Send confirmation to the user
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Confirmation: Registration for Quantum Analogues Workshop',
        text: `Thank you for registering! Your registration details:\n\n${details}\n\nWe look forward to seeing you on September 15-16, 2025 at the University of Luxembourg.`
      });

      // Redirect to thank-you page on success
      res.writeHead(302, { Location: '/thank-you.html' });
      res.end();
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error during registration.');
    }
  } else {
    res.status(405).send('Method not allowed.');
  }
}
