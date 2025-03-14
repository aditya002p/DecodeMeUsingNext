import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config(); 

// Type definition for the request body
interface FormData {
  Name: string;
  Contact_Number: string;
  Student_Grade: string;
  Student_Message: string;
}

// Google Sheets Authentication
const serviceAccountInfo = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccountInfo,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

export async function POST(req: Request): Promise<Response> {
  try {
    const { Name, Contact_Number, Student_Grade, Student_Message }: FormData = await req.json();

    if (!Name || !Contact_Number || !Student_Grade || !Student_Message) {
      console.error('Missing fields in the request:', { Name, Contact_Number, Student_Grade, Student_Message });
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Google Sheets Integration
    try {
      const spreadsheetId = process.env.SPREADSHEET_ID;
      const range = 'Sheet1!A:D';

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [[Name, Contact_Number, Student_Grade, Student_Message]],
        },
      });
      console.log('Data saved to Google Sheets successfully.');
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      return new Response(JSON.stringify({ error: 'Failed to save data to Google Sheets' }), { status: 500 });
    }

    // Email Notification Integration
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const recipients: string[] = ['adityapathak902@gmail.com'];
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipients.join(', '),
        subject: 'New Form Submission',
        text: `A new response was submitted:\n\nStudent Name: ${Name}\nContact Number: ${Contact_Number}\nStudent Grade: ${Student_Grade}\nQuery: ${Student_Message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info);
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Data saved and email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('General error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), { status: 500 });
  }
}
