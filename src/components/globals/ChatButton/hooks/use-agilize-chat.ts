import { useEffect } from "react";
import { AGILIZE_CONFIG } from "../constants/config";

declare global {
  interface Window {
    __agilize_config?: typeof AGILIZE_CONFIG;
  }
}

export function useAgilizeChat() {
  useEffect(() => {
    window.__agilize_config = AGILIZE_CONFIG;

    const scriptId = "agilize-livechat-script";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://cdn.agilize.app/module/messenger/js/livechat.js?token=W6S33HBZDU4XAKHrPWKi0usrHDrs6p";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}
