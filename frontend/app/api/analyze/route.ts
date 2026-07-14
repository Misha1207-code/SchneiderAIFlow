import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const body = await req.json();

    const response = await fetch(
        "https://turbo-space-broccoli-pjg9w569rv9w2qq6-8000.app.github.dev/analyze",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(body),
        }
    );

    const data = await response.json();

    return NextResponse.json(data);

}