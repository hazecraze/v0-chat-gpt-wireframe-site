import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 })
    }

    // Send audit request email to the client
    await resend.emails.send({
      from: "audit@aivisibilitylab.com",
      to: email,
      subject: "Your Free AI Visibility Audit is Ready",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Your AI Visibility Audit</h2>
          <p>Thanks for requesting your free AI visibility audit!</p>
          <p>We've received your request and will analyze how your brand appears in ChatGPT, Perplexity, and Gemini.</p>
          <p>Our team will send you a detailed report within 24-48 hours with:</p>
          <ul>
            <li>Current visibility score</li>
            <li>Where your brand is mentioned</li>
            <li>Optimization opportunities</li>
            <li>Quick wins to improve AI visibility</li>
          </ul>
          <p>Questions? <a href="mailto:aaron@surgecouncil.com">Contact our team</a></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">© 2025 AI Visibility Lab. All rights reserved.</p>
        </div>
      `,
    })

    // Send notification email to team
    await resend.emails.send({
      from: "audit@aivisibilitylab.com",
      to: "aaron@surgecouncil.com",
      subject: "New AI Audit Request",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Audit Request</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p>A new user has requested an AI visibility audit. Please follow up with them within 24 hours.</p>
        </div>
      `,
    })

    return Response.json({ success: true, message: "Audit request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ error: "Failed to send audit request" }, { status: 500 })
  }
}
