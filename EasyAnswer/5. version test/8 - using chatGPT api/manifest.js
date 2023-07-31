{
  "manifest_version": 3,
  "name": "EasyAnswer",
  "short_name": "EasyAnswer",
  "version": "0.1.1",
  "author": "kema-dev - Quentin - Guillaume",
  "description": "Supercharge your Gmail with AI",
  "icons": {
    "128": "asset/icon128.png",
    "48": "asset/icon48.png",
    "16": "asset/icon16.png"
  },
  "content_scripts": [
    {
      "matches": ["*://mail.google.com/*"],
      "js": ["src/extensionInjector.js"],
      "run_at": "document_start"
    }
  ],
  "web_accessible_resources": [
    {
      "resources": [
        "script/gmailJsLoader.js",
        "script/extension.js",
        "script/gmailJsLoader.js.map",
        "script/extension.js.map"
      ],
      "matches": ["<all_urls>"]
    }
  ],
  "host_permissions": ["https://*/*"],
  "permissions": [
    "storage"
  ],
  "action": {
    "default_popup": "popup.html"
  },
  "options_page": "options.html"
}
