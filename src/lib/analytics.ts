declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

export function trackPhoneCall() {
  trackEvent("phone_call_click", {
    event_category: "engagement",
  });
}

export function trackFormSubmission(label: string) {
  trackEvent("form_submission", {
    event_category: "conversion",
    event_label: label,
  });
}

export function trackCTAClick(label: string) {
  trackEvent("cta_click", {
    event_category: "engagement",
    event_label: label,
  });
}
