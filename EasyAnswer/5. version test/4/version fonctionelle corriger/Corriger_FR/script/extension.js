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

  // src/extension.js
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
        "Corriger",
        async function () {
          const data = get_email_data(compose);
          const result = await process_data(data);
          compose.body(result);
          console.log("Data processed and injected into email body!");
        },
        "Custom Style Classes"
      );
    });
  });
}

function get_email_data(compose) {
  const currentEmailId = compose.email_id();
  const currentEmailBody = compose.body();
  const currentEmailSubject = compose.subject();
  const currentEmailTo = compose.recipients();
  const currentEmailFrom = compose.from();
  const currentThread = compose.thread_id();
  const threadDetails = gmail.new.get.thread_data(currentThread);
  const data = {
    currentEmailId: currentEmailId,
    currentEmailBody: currentEmailBody,
    currentEmailSubject,
    emailTo: currentEmailTo,
    emailFrom: currentEmailFrom,
    currentThread: currentThread,
    threadDetails: threadDetails,
  };
  return data;
}

function prettify_text(text) {
  const pretty_text = text.replace(/(<([^>]+)>)/gi, "");
  return pretty_text;
}

async function process_data(data) {
  const output = await fetch_from_hook(data);
  const pretty_output = prettify_text(output);
  return pretty_output;
}

async function fetch_from_hook(input) {
  const url = "https://hook.eu1.make.com/8p42p5g0umgxs6g7dbnpecp4s77yvqqa";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  return response.text();
}
