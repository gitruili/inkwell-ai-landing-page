// src/app/api/track/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { variant } = await req.json();
    if (variant === 'A' || variant === 'B') {
      console.log(`[A/B Test Conversion]: Variant ${variant} clicked the CTA.`);
      return NextResponse.json({ success: true, message: `Tracked variant ${variant}` });
    }
    return NextResponse.json({ success: false, message: 'Invalid variant' }, { status: 400 });
  } catch {
    return NextResponse.json({ success: false, message: 'Bad request' }, { status: 400 });
  }
}
