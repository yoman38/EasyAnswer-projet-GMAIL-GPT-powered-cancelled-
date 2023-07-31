"use strict";
(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) =>
        x.done
          ? resolve(x.value)
          : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  var loaderId = setInterval(() => {
    if (!window._gmailjs) {
      return;
    }
    clearInterval(loaderId);
    startExtension(window._gmailjs);
  }, 100);
  var extension_default = startExtension;
})();
//# sourceMappingURL=extension.js.map

async function startExtension(gmail) {
  window.gmail = gmail;
  gmail.observe.on("load", () => {
    gmail.observe.on("view_email", (domEmail) => {
      console.log("Looking at email:", domEmail);
      const emailData = gmail.new.get.email_data(domEmail);
      console.log("Email data:", emailData);
    });
    gmail.observe.on("compose", (compose) => {
      gmail.tools.add_compose_button(
        compose,
        "Correct",
        async function () {
          const prompt = "Correct this text: " + compose.body();
          compose.body('Correction in progress...' + compose.body());
          const result = await process_data(prompt, 'davinci');
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Rephrase",
        async function () {
          const prompt = "Rephrase this text: " + compose.body();
          compose.body('Rephrasing in progress...' + compose.body());
          const result = await process_data(prompt, 'davinci');
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Informal Response",
        async function () {
          const prompt = "Generate an informal response to this text: " + compose.body();
          compose.body('Response in progress...' + compose.body());
          const result = await process_data(prompt, 'davinci');
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Formal Response",
        async function () {
          const prompt = "Generate a formal response to this text: " + compose.body();
          compose.body('Response in progress...' + compose.body());
          const result = await process_data(prompt, 'davinci');
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Translate",
        async function () {
          const prompt = "Translate this text to English: " + compose.body();
          compose.body('Translation in progress...' + compose.body());
          const result = await process_data(prompt, 'davinci');
          compose.body(result);
        },
        "Custom Style Classes"
      );
    });
  });
}

async function process_data(prompt, engine) {
  const result = await fetch_from_openai(prompt, engine);
  return result.choices[0].text;
}

async function fetch_from_openai(prompt, engine) {
  let openai_key;
  chrome.storage.sync.get(['openai_key'], function(result) {
    openai_key = result.openai_key;
  });
  if(!openai_key) {
    throw new Error("OpenAI API Key is not provided. Please provide it in the extension settings.");
  }
  const response = await fetch('https://api.openai.com/v1/engines/' + engine + '/completions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openai_key}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 60
    }),
  });
  const data = await response.json();
  return data;
}
