import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { to, subject, text } = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to,
      subject,
      text,
    });
    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (typeof error === 'object' && error !== null && 'message' in error) {
      message = String((error as any).message);
    } else if (typeof error === 'string') {
      message = error;
    }
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
