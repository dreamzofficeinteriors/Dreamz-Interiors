/**
 * Cloudflare Pages Function: handles POST /api/callback
 */
export async function onRequestPost(context) {
  const corsHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = await context.request.json();

    // Spam honeypot detection
    if (body.website_trap && body.website_trap.length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Required fields check
    if (!body.fullName || !body.phone || !body.company || !body.city) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please fill in all required fields (Name, Phone, Company, City).",
        }),
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Forward lead payload to external webhook if configured
    const webhookUrl = context.env?.LEAD_WEBHOOK_URL;
    if (webhookUrl && !webhookUrl.includes("placeholder-lead-webhook")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_lead_callback",
            timestamp: new Date().toISOString(),
            source: "website_callback_form",
            lead: {
              fullName: body.fullName,
              phone: body.phone,
              company: body.company,
              city: body.city,
              projectType: body.projectType || "not-sure",
              brief: body.brief || "",
            },
          }),
        });
      } catch (err) {
        console.error("Failed to forward lead to webhook:", err);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Callback request received successfully. An accountable Dreamz project lead will review your scope and get in touch within 1 business day.",
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error("Cloudflare function callback error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error?.message || "Failed to process callback request.",
      }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
