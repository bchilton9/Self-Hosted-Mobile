
# Not Fully Functional Yet

___

# 📱 Self-Hosted Better Mobile

A lightweight customization project that improves mobile usability across self-hosted apps.

This project enhances user interfaces that are clunky or difficult on small screens. By injecting a single JavaScript file, it transforms mobile layouts into clean, tap-friendly experiences. Works alongside **Theme Park** for styling, but focuses entirely on **functionality improvements**, not themes.

___

## 📲 Features

- Custom mobile launcher for Organizr (like iOS app icons)
- Full-screen card with collapsible categories and touch-friendly buttons
- Automatically pulls tab data from Organizr’s existing config
- Hamburger toggle replaces the sidebar on mobile
- Can be injected using a simple script tag — no install or rebuild needed

___

## 🚀 How to Use with Organizr

### 1. Add the JavaScript to Organizr

In Organizr:
- Go to **Settings** → **Customization** → **Custom JavaScript**
- Paste the following:
```html
(function(){
  const script = document.createElement('script');
  script.src = "https://mobile.chilsoft.com/organizr/main.js";
  script.type = "text/javascript";
  document.head.appendChild(script);
})();
```
Save, then reload the page on a mobile device to see the new launcher.

> 💡 Want to customize the look too? This works great with [Theme Park](https://theme-park.dev/) — just use their guide to apply a CSS theme. Our script won’t interfere.

___

### 🧩 Toggle Scripts in `main.js`

`main.js` loads all features by default — but you can disable individual modules with URL parameters.

**Supported toggles:**

| Parameter      | Function                      |
|----------------|-------------------------------|
| `?nomenu`      | Disable the mobile launcher   |
| `?nosettings`  | Disable settings enhancements |

**Example:**

```html
(function(){
  const script = document.createElement('script');
  script.src = "https://mobile.chilsoft.com/organizr/main.js?nomenu";
  script.type = "text/javascript";
  document.head.appendChild(script);
})();
```

This example disables only the mobile launcher, but you can combine flags like `?nomenu&nosettings` to disable both.

___

## 👷 More Coming Soon

We’re just getting started. New mobile features and app support will be rolled out regularly. This project is modular and built for expansion.

___

## 📜 License

MIT – free to use and modify. Not affiliated with Organizr, Theme Park, or any app mentioned.

___

## 🛠 Made By

[ChilSoft.com](https://chilsoft.com) — fueled by caffeine and questionable commits.

___

## ⚠️ Disclaimer

This site and its contents are provided for informational and educational purposes only.

Use any code, tools, or instructions at your own risk.  
We are **not responsible** for any damage to your device, data loss, or unintended consequences.

Always proceed with care — and make backups.

© **2025 ChilSoft**. All rights reserved.
