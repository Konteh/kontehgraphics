
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
  import { initGA, trackPage } from "./ga";

  // Initialize Google Analytics and send page_view on SPA navigation
  initGA();

  const sendPageView = () => {
    try {
      trackPage();
    } catch (e) {
      // no-op
    }
  };

  // Listen to navigation events so SPA route changes are tracked
  window.addEventListener("popstate", sendPageView);
  window.addEventListener("hashchange", sendPageView);

  // Patch history methods to detect pushState/replaceState
  ;(function () {
    const _push = history.pushState;
    const _replace = history.replaceState;
    history.pushState = function (...args: any[]) {
      const result = _push.apply(this, args as any);
      window.dispatchEvent(new Event("locationchange"));
      return result;
    };
    history.replaceState = function (...args: any[]) {
      const result = _replace.apply(this, args as any);
      window.dispatchEvent(new Event("locationchange"));
      return result;
    };
    window.addEventListener("locationchange", sendPageView);
  })();

  createRoot(document.getElementById("root")!).render(<App />);
  