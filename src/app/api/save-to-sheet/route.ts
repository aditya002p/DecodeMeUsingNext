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
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // 1. Save Data to Google Sheets
    const keyFilePath = path.join(process.cwd(), 'google-service-account.json');
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1L2dPY0ZZjhRz1xfUIVqZpFzNQ2eZL8Ws74Ul5nL1dDo'; // Replace with your actual Sheet ID
    const range = 'Sheet1!A:D'; // Adjust this based on your sheet's layout (A:D to cover 4 columns)

    // Save form data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [[studentName, contactNumber, studentGrade, query]],
      },
    });

    // 2. Send Email Notification
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or use another SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Email from .env.local
        pass: process.env.EMAIL_PASS, // App password from .env.local
      },
    });

    // Multiple recipients
    const recipients: string[] = ['admin1@example.com', 'admin2@example.com']; // Replace with actual email addresses
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients.join(', '),
      subject: 'New Form Submission',
      text: `A new response was submitted:\n\nStudent Name: ${studentName}\nContact Number: ${contactNumber}\nStudent Grade: ${studentGrade}\nQuery: ${query}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Data saved and email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { status: 500 }
    );
  }
}
