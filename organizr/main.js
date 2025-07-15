// main.js 🧠 Master loader
console.log("🧠 main.js loaded");

(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const disableMenu = urlParams.has("nomenu");
  const disableSettings = urlParams.has("nosettings");

  const loadScript = (name, url) => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.onload = () => console.log(`✅ ${name} loaded`);
    script.onerror = () => console.error(`❌ Failed to load ${name}`);
    document.head.appendChild(script);
  };

  if (!disableMenu) {
    loadScript("menu.js", "https://web.chilton.xyz/mobile/organizr/menu.js");
  }

  if (!disableSettings) {
    loadScript("settings.js", "https://web.chilton.xyz/mobile/organizr/settings.js");
  }

})();