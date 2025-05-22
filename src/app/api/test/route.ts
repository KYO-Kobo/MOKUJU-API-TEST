import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // ここにMOKUJU APIのエンドポイントを設定
    const response = await fetch('https://api.mokuju.com/endpoint', {
      headers: {
        'Authorization': `Bearer ${process.env.MOKUJU_API_KEY}`,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'APIリクエストに失敗しました' },
      { status: 500 }
    );
  }
} 