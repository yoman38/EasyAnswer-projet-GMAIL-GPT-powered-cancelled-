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

function get_hook_url(desired_hook) {
  const urls = {
    corriger: "https://hook.eu1.make.com/8p42p5g0umgxs6g7dbnpecp4s77yvqqa",
    reformuler: "https://hook.eu1.make.com/o6mn1mo3h1ul2ax4o34bghmk1vv87kgf",
    reponse_tu: "https://hook.eu1.make.com/gj49o3ljyqfbpeqv569f3ok5elbkv94f",
    reponse_vous: "https://hook.eu1.make.com/1chjrnohmw9hsyevtou9ctptagkrqjes",
    traduction_fr_to_en: "https://hook.eu1.make.com/fqu1ayv9qd837rvm3gf6459nysyv4s22",
  };
  return urls[desired_hook];
}

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
          const hook_url = get_hook_url("https://hook.eu1.make.com/8p42p5g0umgxs6g7dbnpecp4s77yvqqa");
          const data = get_email_data(compose);
          const result = await process_data(data, hook_url);
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Reformuler",
        async function () {
          const hook_url = get_hook_url("https://hook.eu1.make.com/o6mn1mo3h1ul2ax4o34bghmk1vv87kgf");
          const data = get_email_data(compose);
          const result = await process_data(data, hook_url);
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Reponse Tu",
        async function () {
          const hook_url = get_hook_url("https://hook.eu1.make.com/gj49o3ljyqfbpeqv569f3ok5elbkv94f");
          const data = get_email_data(compose);
          const result = await process_data(data, hook_url);
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Reponse Vous",
        async function () {
          const hook_url = get_hook_url("https://hook.eu1.make.com/1chjrnohmw9hsyevtou9ctptagkrqjes");
          const data = get_email_data(compose);
          const result = await process_data(data, hook_url);
          compose.body(result);
        },
        "Custom Style Classes"
      );
      gmail.tools.add_compose_button(
        compose,
        "Traduction FR to EN",
        async function () {
          const hook_url = get_hook_url("https://hook.eu1.make.com/fqu1ayv9qd837rvm3gf6459nysyv4s22");
          const data = get_email_data(compose);
          const result = await process_data(data, hook_url);
          compose.body(result);
        },
        "Custom Style Classes"
      );
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
  const pretty_text = text.replace(/(<([^>]+)>)/gi, "");
  return pretty_text;
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
