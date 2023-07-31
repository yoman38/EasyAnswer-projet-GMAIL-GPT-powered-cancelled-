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
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
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
  function startExtension(gmail) {
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
          "Reply GPT",
          function() {
            return __async(this, null, function* () {
              const currentEmailId = compose.email_id();
              const currentEmailBody = compose.body();
              const currentEmailSubject = compose.subject();
              let currentEmailTo = compose.recipients().to[0];
              let currentEmailFrom = compose.from();
              if (gmail.new.get.email_data(currentEmailId)) {
                currentEmailTo = gmail.new.get.email_data(currentEmailId).to[0].name;
                currentEmailFrom = gmail.new.get.email_data(currentEmailId).from.name;
              }
              const currentThread = compose.thread_id();
              const threadDetails = yield gmail.new.get.thread_data(currentThread);
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
              const data = {
                currentEmailBody: htmlToText(removeSignature(currentEmailBody)),
                currentEmailSubject,
                previousEmailBody: lastEmail ? htmlToText(lastEmail.content_html) : null,
                emailTo: currentEmailTo,
                emailFrom: currentEmailFrom
              };
              let url = localStorage.getItem("replyGPTWebhook");
              if (!url) {
                yield gmail.tools.add_modal_window(
                  "First time using this extension? Enter your webhook here",
                  "<input type='text' id='myWebhookInput' placeholder='https://hook.us1.make.com/XXXXXX' > <p>To change url later you will need to reset local storage ('clear cookies')</p>",
                  function() {
                    url = document.querySelector("#myWebhookInput").value;
                    localStorage.setItem("replyGPTWebhook", url);
                    gmail.tools.remove_modal_window();
                    fetchReply(data);
                  }
                );
              } else
                fetchReply(data);
              function fetchReply(data2) {
                return __async(this, null, function* () {
                  const animation = [
                    "\u2554\u2550\u2550\u2550\u2550\u2564\u2564\u2564\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551    \u2502\u2502\u2502 \\   \u2551\n\u2551    \u2502\u2502\u2502  O  \u2551\n\u2551    OOO     \u2551",
                    "\u2554\u2550\u2550\u2550\u2550\u2564\u2564\u2564\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551    \u2502\u2502\u2502\u2502    \u2551\n\u2551    \u2502\u2502\u2502\u2502    \u2551\n\u2551    OOOO    \u2551",
                    "\u2554\u2550\u2550\u2550\u2550\u2564\u2564\u2564\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551   / \u2502\u2502\u2502    \u2551\n\u2551  O  \u2502\u2502\u2502    \u2551\n\u2551     OOO    \u2551",
                    "\u2554\u2550\u2550\u2550\u2550\u2564\u2564\u2564\u2564\u2550\u2550\u2550\u2550\u2557\n\u2551    \u2502\u2502\u2502\u2502    \u2551\n\u2551    \u2502\u2502\u2502\u2502    \u2551\n\u2551    OOOO    \u2551"
                  ];
                  let i = 0;
                  let waiting = setInterval(function() {
                    compose.body(
                      "<p>Waiting for reply from machine overlord ...</p><pre>" + animation[i].replace(/\n/g, "<br>").replace(/\s/g, "&nbsp;") + "</pre>"
                    );
                    i = (i + 1) % animation.length;
                  }, 300);
                  const response = yield fetch(url, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data2)
                  });
                  const text = yield response.text();
                  clearInterval(waiting);
                  console.log(text);
                  compose.body(text);
                });
              }
              function htmlToText(html) {
                function stripHtml(str) {
                  str = str.replace(/<br>/gi, "\n");
                  str = str.replace(/<div>/gi, "\n");
                  str = str.replace(/<p.*>/gi, "\n");
                  str = str.replace(/<(?:.|\s)*?>/g, "");
                  str = str.replace(/\<|\>/g, "");
                  str = str.replace(/[\s\s]{2,}/gm, "\n");
                  return str;
                }
                return stripHtml(html);
              }
              function removeSignature(currentEmailBody2) {
                let currentEmailBodyWithoutSignature = new DOMParser().parseFromString(currentEmailBody2, "text/html");
                let signature = currentEmailBodyWithoutSignature.querySelector(
                  '[data-smartmail="gmail_signature"]'
                );
                if (signature)
                  signature.remove();
                currentEmailBodyWithoutSignature = currentEmailBodyWithoutSignature.body.innerHTML;
                return currentEmailBodyWithoutSignature;
              }
            });
          },
          "Custom Style Classes"
        );
      });
    });
  }
  var extension_default = startExtension;
})();
//# sourceMappingURL=extension.js.map
