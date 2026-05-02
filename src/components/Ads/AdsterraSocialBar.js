import { useEffect } from "react";

const ADSTERRA_SOCIAL_BAR_URL =
  "https://pl21023726.profitablecpmratenetwork.com/5e/6c/56/5e6c56b250390acf4198e633d962c138.js";

const AdsterraSocialBar = () => {
  useEffect(() => {
    const existingScript = document.getElementById("adsterra-social-bar");

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "adsterra-social-bar";
    script.async = true;
    script.src = ADSTERRA_SOCIAL_BAR_URL;
    script.onload = () => console.log("Adsterra Social Bar script loaded");
    script.onerror = () => console.log("Adsterra Social Bar script blocked or failed");

    document.body.appendChild(script);
  }, []);

  return null;
};

export default AdsterraSocialBar;
