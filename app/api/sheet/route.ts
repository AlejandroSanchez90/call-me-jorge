import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

export async function POST(request: Request) {
  console.log(SPREADSHEET_ID, SHEET_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_SERVICE_PRIVATE_KEY);
  const { email, name, phone, postalCode } = await request.json();
  const influencer = process.env.INFLUENCER!;

  const serviceAccountAuth = new JWT({
    email: GOOGLE_CLIENT_EMAIL,
    key: GOOGLE_SERVICE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID!, serviceAccountAuth);

  await doc.loadInfo();

  const sheet = doc.sheetsById[-SHEET_ID!];
  await sheet.addRow({ email, name, phone, postalCode, influencer });
  console.log(doc.title);

  return NextResponse.json({});
}
