import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("➡️ API Route Hit");

    const body = await req.json();

    console.log("Body:", body);

    const response = await fetch(
      "http://127.0.0.1:8000/analyze",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    console.log("Backend Status:", response.status);

    const text = await response.text();

    console.log("Backend Response:", text);

    return new Response(text, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      }
    );
  }
}