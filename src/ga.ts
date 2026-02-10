declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_ID = "G-EDPHSKZ1W8";

function ensureGtagLoaded() {
  if (typeof window === "undefined") return;

  if (!window.dataLayer) {
    window.dataLayer = window.dataLayer || [];
  }

  if (!window.gtag) {
    // create a lightweight gtag shim so calls before the script loads are queued
    window.gtag = function (...args: any[]) {
      window.dataLayer!.push(args);
    };
  }
}

export function initGA() {
  if (typeof document === "undefined") return;
  ensureGtagLoaded();

  // If the script tag isn't already present, add it (safe if you already added it in index.html)
  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`)) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  // initialize gtag but don't auto-send page_view (we'll control SPA page views)
  window.gtag!("js", new Date());
  window.gtag!("config", GA_ID, { send_page_view: false });
}

export function trackPage(path?: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  const page_path = path ?? window.location.pathname + window.location.search + window.location.hash;
  window.gtag!("event", "page_view", { page_path });
}

export function trackEvent(action: string, params?: Record<string, any>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag!("event", action, params || {});
}

export default {
  initGA,
  trackPage,
  trackEvent,
};
