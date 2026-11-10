type AnalyticsEvent =
  | "call_click"
  | "whatsapp_click"
  | "callback_form_submit"
  | "quote_cta_click"
  | "project_view";

export function trackEvent(
  eventName: AnalyticsEvent,
  properties?: Record<string, any>
) {
  if (typeof window === "undefined") return;

  // Push to dataLayer if Google Analytics / GTM is present
  const win = window as any;
  if (win.dataLayer && Array.isArray(win.dataLayer)) {
    win.dataLayer.push({
      event: eventName,
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }

  // Plausible / custom analytics fallback
  if (typeof win.plausible === "function") {
    win.plausible(eventName, { props: properties });
  }

  // Log in development for verification
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event: ${eventName}]`, properties);
  }
}

