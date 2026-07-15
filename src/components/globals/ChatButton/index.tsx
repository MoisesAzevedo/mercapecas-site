import { useEffect } from "react";

export function ChatButton() {
  useEffect(() => {
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

  return null;
}

