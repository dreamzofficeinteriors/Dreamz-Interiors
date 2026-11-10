import { NextRequest, NextResponse } from "next/server";
import { callbackFormSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate payload with Zod
    const result = callbackFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify the required fields.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { website_trap, ...leadData } = result.data;

    // Spam honeypot detection
    if (website_trap && website_trap.length > 0) {
      // Silently accept without action to fool bots
      return NextResponse.json({ success: true });
    }

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    // Forward lead payload to external webhook (AI voice calling agent / CRM / Sheet)
    if (webhookUrl && !webhookUrl.includes("placeholder-lead-webhook")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_lead_callback",
            timestamp: new Date().toISOString(),
            source: "website_callback_form",
            lead: leadData,
          }),
        });
      } catch (err) {
        console.error("Failed to forward lead to webhook:", err);
        // Continue execution to not fail the user's inquiry response
      }
    }

    return NextResponse.json({
      success: true,
      message: "Callback request received successfully.",
    });
  } catch (error) {
    console.error("Callback route error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}

