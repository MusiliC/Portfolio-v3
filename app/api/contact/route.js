import { NextResponse } from "next/server";

export async function POST(req,res) {

  const reqBody = await req.json();
  console.log(reqBody);
  // ...
  return NextResponse.json({ message: "Hello World" });
}
