import { transporter, mailOptions } from "@/helper/mailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: "This is a test string",
      html: `<h2>${data.subject}</h2> <h3>From: ${data.name} -  ${data.email} </h3>    <p>${data.body}</p>`,
    });

    return new Response("Success, email sent!", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to send email", {
      status: 500,
    });
  }
}
