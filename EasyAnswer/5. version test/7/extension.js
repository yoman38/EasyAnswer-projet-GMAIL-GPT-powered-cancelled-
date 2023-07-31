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
      const buttons = ['Correction', 'Reformulate', 'Response Informal', 'Response Formal', 'Translate'];
      for (const button of buttons) {
        gmail.tools.add_compose_button(
          compose,
          button,
          async function () {
            const hook_url = "https://hook.eu1.make.com/hook_url"; // Replace with your hook URL
            const data = get_email_data(compose);
            const prompt = generatePrompt(button, compose);
            data['prompt'] = prompt;
            compose.body("Processing..." + compose.body());
            const result = await process_data(data, hook_url);
            compose.body(result);
          },
          "Custom Style Classes"
        );
      }
    });
  });
}

function get_email_data(compose) {
  const currentEmailTo = compose.recipients();
  const currentEmailFrom = compose.from();
  const currentEmailBody = compose.body();
  const currentEmailSubject = compose.subject();
  const currentEmailId = compose.email_id();
  const currentThread = compose.thread_id();
  const threadDetails = gmail.new.get.thread_data(currentThread);
  let lastEmail = null;
  if (threadDetails) {
    for (let email of threadDetails.emails) {
      if (!email.is_draft) {
        lastEmail = email;
      }
      if (email.id === currentEmailId) {
        break;
      }
    }
  }
  const previousEmailBody = lastEmail ? lastEmail.body : "";
  const data = {
    emailTo: currentEmailTo,
    emailFrom: currentEmailFrom,
    currentEmailBody: prettify_text(remove_signature(currentEmailBody)),
    previousEmailBody: prettify_text(previousEmailBody),
    currentEmailSubject: currentEmailSubject,
  };
  return data;
}

function remove_signature(mail_body) {
  let current_email_body_without_signature = new DOMParser().parseFromString(
    mail_body,
    "text/html"
  );
  const signature = current_email_body_without_signature.querySelector(
    '[data-smartmail="gmail_signature"]'
  );
  if (signature) signature.remove();
  current_email_body_without_signature =
    current_email_body_without_signature.body.innerHTML;
  return current_email_body_without_signature;
}

function prettify_text(text) {
  if (!text) return "";
  let pretty_text = text.replace(/\n/g, "<br>");
  pretty_text = pretty_text.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  return pretty_text;
}

function generatePrompt(buttonType, compose) {
    // This function generates a prompt based on the button that was clicked.
    const detectedUiLang = detectUiLanguage(); // Replace with actual function
    switch (buttonType) {
        case 'Correction':
            return `Correct only spelling mistakes in the following text written in ${detectedUiLang}, keeping the original sentences: "{{${compose.body()}}}"`;
        case 'Reformulate':
            return `Reformulate the following text written in ${detectedUiLang}: "{{${compose.body()}}}"`;
        case 'Response Informal':
            return `Generate an informal response in ${detectedUiLang} for the following email: "{{${compose.body()}}}"`;
        case 'Response Formal':
            return `Generate a formal response in ${detectedUiLang} for the following email: "{{${compose.body()}}}"`;
        case 'Translate':
            const detectedEmailLang = detectEmailLanguage(compose.body()); // Replace with actual function
            return `Translate the following email written in ${detectedEmailLang} to ${detectedUiLang}: "{{${compose.body()}}}"`;
        default:
            return '';
    }
}

async function process_data(data, hook_url) {
  const output = await fetch_from_hook(data, hook_url);
  const pretty_output = prettify_text(output);
  return pretty_output;
}

async function fetch_from_hook(input, hook_url) {
  const response = await fetch(hook_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  return response.text();
}
