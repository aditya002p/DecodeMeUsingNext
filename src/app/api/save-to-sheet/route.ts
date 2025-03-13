import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import path from 'path';

// Type definition for the request body (updated with the 4 fields)
interface FormData {
  studentName: string;
  contactNumber: string;
  studentGrade: string;
  query: string;
}

// This is the POST handler for the API route
export async function POST(req: Request): Promise<Response> {
    try {
      const { studentName, contactNumber, studentGrade, query }: FormData = await req.json();
  
      if (!studentName || !contactNumber || !studentGrade || !query) {
        console.error('Missing fields in the request:', { studentName, contactNumber, studentGrade, query });
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
      }
  
      // Google Sheets Integration
      try {
        const keyFilePath = path.join(process.cwd(), 'google-service-account.json');
        const auth = new google.auth.GoogleAuth({
          keyFile: keyFilePath,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
  
        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = '1L2dPY0ZZjhRz1xfUIVqZpFzNQ2eZL8Ws74Ul5nL1dDo'; 
        const range = 'Form_Submission_Data!A:D';
  
        const response = await sheets.spreadsheets.values.append({
          spreadsheetId,
          range,
          valueInputOption: 'RAW',
          insertDataOption: 'INSERT_ROWS',
          requestBody: {
            values: [[studentName, contactNumber, studentGrade, query]],
          },
        });
        console.log('Google Sheets response:', response);
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
          text: `A new response was submitted:\n\nStudent Name: ${studentName}\nContact Number: ${contactNumber}\nStudent Grade: ${studentGrade}\nQuery: ${query}`,
        };
  
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);
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
  
