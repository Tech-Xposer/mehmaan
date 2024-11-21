import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api/sendmail
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, orders, phone, email, address, zipcode, orderType } = body;

    const response = await sendEmail(
      name,
      orders,
      phone,
      email,
      address,
      zipcode,
      orderType
    );
    return NextResponse.json({ message: "Email sent successfully!", response });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // Use secure: false for STARTTLS, true if you're using SSL
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_USERNAME,
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD
  }
});

// Function to send email
const sendEmail = async (
  name,
  orders,
  phone,
  email,
  address,
  zipcode,
  orderType
) => {
  console.log("Sending email to:", email); // Log the recipient's email
  try {
    const mail = await transporter.sendMail({
      from: `"Restaurant Milane" <${process.env.NEXT_PUBLIC_NODEMAILER_USERNAME}>`, // Use the actual email as the sender
      to: `${process.env.NEXT_PUBLIC_NODEMAILER_RECIPIENT}, ${email},${process.env.NEXT_PUBLIC_NODEMAILER_ADMIN}`,
      subject: `Order from ${name}`,
      html: `
     <h1>Thank you for your order!</h1>
<h2>Order Type: ${orderType}</h2>
<h3>New Order Details</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Orders:</strong></p>
<ul>
  ${orders
    .map(
      (order) => `
        <li>
          <p>${order.name} - Quantity: ${order.quantity || 1}, Price: ${order.price} €</p>
          ${
            order.option
              ? `<ul><li>Option: ${order.option}</li></ul>`
              : ""
          }
          ${
            order.selectedItems
              ? `<ul>${Object.entries(order.selectedItems)
                  .map(
                    ([key, value]) => `<li>${key}: ${value}</li>`
                  )
                  .join("")}</ul>`
              : ""
          }
          <strong>Total: ${(order.price * (order.quantity || 1)).toFixed(
            2
          )} €</strong>
        </li>`
    )
    .join("")}
</ul>
${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
${zipcode ? `<p><strong>Zip:</strong> ${zipcode}</p>` : ""}

      `
    });

    return mail; // Return mail info on success
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
