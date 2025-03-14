// import { google } from 'googleapis';
// import path from 'path';

// Type definition for the request body
interface FormData {
  Name: string;
  Contact_Number: string;
  Student_Grade: string;
  Student_Message: string;
}

// This is the POST handler for the API route
export async function POST(req: Request) {
  try {
    // Log incoming request body
    const requestBody = await req.json();
    console.log('Received Request:', requestBody);

    const { Name, Contact_Number, Student_Grade, Student_Message }: FormData = requestBody;

    if (!Name || !Contact_Number || !Student_Grade || !Student_Message) {
      console.error('Missing fields in the request:', { Name, Contact_Number, Student_Grade, Student_Message });
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Google Sheets Integration
    // try {
    //   console.log('Initializing Google Sheets API...');

      // const keyFilePath = path.join(process.cwd(), 'google-service-account.json');
      // const auth = new google.auth.GoogleAuth({
      //   keyFile: keyFilePath,
      //   scopes: 'https://www.googleapis.com/auth/spreadsheets',
      // });

    //   const sheets = google.sheets({ version: 'v4', auth });
    //   const spreadsheetId = '1P1QWBHHBiICJgX3L9vAP7gFhaAfo5_K0gkrAccKIvYk';
    //   const range = 'Sheet1!A:D';

    //   console.log('Attempting to append data to Google Sheets...');
    //   const response = await sheets.spreadsheets.values.get({
    //     spreadsheetId,
    //     range,
    //   });
    //   console.log(response);
    // //   const response = await sheets.spreadsheets.values.append({
    // //     spreadsheetId,
    // //     range,
    // //     valueInputOption: 'RAW',
    // //     insertDataOption: 'INSERT_ROWS',
    // //     requestBody: {
    // //       values: [[Name, Contact_Number, Student_Grade, Student_Message]],
    // //     },
    // //   });

    // //   console.log('Google Sheets API Response:', response.data);
    // //   return new Response(JSON.stringify({ message: 'Data saved successfully', response: response.data }), { status: 200 });
    // } catch (error) {
    //   console.error('Error saving to Google Sheets:', error);
    //   return new Response(JSON.stringify({ error: 'Failed to save data to Google Sheets', details: error }), { status: 500 });
    // }
    return new Response(JSON.stringify({ message: 'OK' }), { status: 200 });
  } catch (error) {
    console.error('General error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request', details: error }), { status: 500 });
  }
}


// give the google-serice-account.json as fields not as a file