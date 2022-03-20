(() => {
  // src/helper/element.helper.ts
  var querySelector = (selector) => {
    return document.querySelector(selector);
  };

  // src/styles.ts
  var addStylesheet = () => {
    extensionStyleElement.className = "styles";
    extensionStyleElement.innerText = `
        .emoji {
          display: contents;
          cursor: pointer!important;
        }
        .emoji:hover {
          transform: scale(1.2);
        }
        .emojiList {
            overflow: scroll;
            display: flex;
            font-size: 22px;
            width: 100%;
            height: 92px;
            word-wrap: break-word;
        }
        .gifList {
            overflow: scroll;
            display: flex;
            font-size: 22px;
            width: 100%;
            height: 92px;
            word-wrap: break-word;
        }
    `;
  };

  // src/definitions/emojis.ts
  var emojis = [
    "\u{1F60C}",
    "\uFE0F\u{1F643}",
    "\u{1F636}",
    "\u{1F97A}",
    "\u{1F605}",
    "\u{1F62B}",
    "\u{1F928}",
    "\u{1F92F}",
    "\u{1F621}",
    "\u{1F627}",
    "\u{1F607}",
    "\u{1F970}",
    "\u{1F600}",
    "\u{1F601}",
    "\u{1F602}",
    "\u{1F923}",
    "\u{1F603}",
    "\u{1F604}",
    "\u{1F605}",
    "\u{1F606}",
    "\u{1F609}",
    "\u{1F60A}",
    "\u{1F60B}",
    "\u{1F60E}",
    "\u{1F60D}",
    "\u{1F618}",
    "\u{1F617}",
    "\u{1F619}",
    "\u{1F61A}",
    "\u{1F642}",
    "\u{1F917}",
    "\u{1F914}",
    "\u{1F610}",
    "\u{1F611}",
    "\u{1F636}",
    "\u{1F644}",
    "\u{1F60F}",
    "\u{1F623}",
    "\u{1F625}",
    "\u{1F62E}",
    "\u{1F910}",
    "\u{1F62F}",
    "\u{1F62A}",
    "\u{1F62B}",
    "\u{1F634}",
    "\u{1F913}",
    "\u{1F61B}",
    "\u{1F61C}",
    "\u{1F61D}",
    "\u{1F924}",
    "\u{1F612}",
    "\u{1F613}",
    "\u{1F614}",
    "\u{1F615}",
    "\u{1F643}",
    "\u{1F911}",
    "\u{1F632}",
    "\u2639",
    "\u{1F641}",
    "\u{1F616}",
    "\u{1F61E}",
    "\u{1F61F}",
    "\u{1F624}",
    "\u{1F622}",
    "\u{1F62D}",
    "\u{1F626}",
    "\u{1F627}",
    "\u{1F628}",
    "\u{1F629}",
    "\u{1F62C}",
    "\u{1F630}",
    "\u{1F631}",
    "\u{1F633}",
    "\u{1F635}",
    "\u{1F621}",
    "\u{1F620}",
    "\u{1F920}",
    "\u{1F921}",
    "\u{1F925}",
    "\u{1F637}",
    "\u{1F912}",
    "\u{1F915}",
    "\u{1F922}",
    "\u{1F927}",
    "\u{1F608}",
    "\u{1F47F}",
    "\u{1F479}",
    "\u{1F47A}",
    "\u{1F480}",
    "\u2620",
    "\u{1F47B}",
    "\u{1F47D}",
    "\u{1F47E}",
    "\u{1F916}",
    "\u{1F4A9}",
    "\u{1F63A}",
    "\u{1F638}",
    "\u{1F639}",
    "\u{1F63B}",
    "\u{1F63C}",
    "\u{1F63D}",
    "\u{1F640}",
    "\u{1F63F}",
    "\u{1F63E}",
    "\u{1F648}",
    "\u{1F649}",
    "\u{1F64A}",
    "\u{1F466}",
    "\u{1F466}\u{1F3FB}",
    "\u{1F466}\u{1F3FC}",
    "\u{1F466}\u{1F3FD}",
    "\u{1F466}\u{1F3FE}",
    "\u{1F466}\u{1F3FF}",
    "\u{1F467}",
    "\u{1F467}\u{1F3FB}",
    "\u{1F467}\u{1F3FC}",
    "\u{1F467}\u{1F3FD}",
    "\u{1F467}\u{1F3FE}",
    "\u{1F467}\u{1F3FF}",
    "\u{1F468}",
    "\u{1F468}\u{1F3FB}",
    "\u{1F468}\u{1F3FC}",
    "\u{1F468}\u{1F3FD}",
    "\u{1F468}\u{1F3FE}",
    "\u{1F468}\u{1F3FF}",
    "\u{1F469}",
    "\u{1F469}\u{1F3FB}",
    "\u{1F469}\u{1F3FC}",
    "\u{1F469}\u{1F3FD}",
    "\u{1F469}\u{1F3FE}",
    "\u{1F469}\u{1F3FF}",
    "\u{1F474}",
    "\u{1F474}\u{1F3FB}",
    "\u{1F474}\u{1F3FC}",
    "\u{1F474}\u{1F3FD}",
    "\u{1F474}\u{1F3FE}",
    "\u{1F474}\u{1F3FF}",
    "\u{1F475}",
    "\u{1F475}\u{1F3FB}",
    "\u{1F475}\u{1F3FC}",
    "\u{1F475}\u{1F3FD}",
    "\u{1F475}\u{1F3FE}",
    "\u{1F475}\u{1F3FF}",
    "\u{1F476}",
    "\u{1F476}\u{1F3FB}",
    "\u{1F476}\u{1F3FC}",
    "\u{1F476}\u{1F3FD}",
    "\u{1F476}\u{1F3FE}",
    "\u{1F476}\u{1F3FF}",
    "\u{1F47C}",
    "\u{1F47C}\u{1F3FB}",
    "\u{1F47C}\u{1F3FC}",
    "\u{1F47C}\u{1F3FD}",
    "\u{1F47C}\u{1F3FE}",
    "\u{1F47C}\u{1F3FF}",
    "\u{1F46E}",
    "\u{1F46E}\u{1F3FB}",
    "\u{1F46E}\u{1F3FC}",
    "\u{1F46E}\u{1F3FD}",
    "\u{1F46E}\u{1F3FE}",
    "\u{1F46E}\u{1F3FF}",
    "\u{1F575}",
    "\u{1F575}\u{1F3FB}",
    "\u{1F575}\u{1F3FC}",
    "\u{1F575}\u{1F3FD}",
    "\u{1F575}\u{1F3FE}",
    "\u{1F575}\u{1F3FF}",
    "\u{1F482}",
    "\u{1F482}\u{1F3FB}",
    "\u{1F482}\u{1F3FC}",
    "\u{1F482}\u{1F3FD}",
    "\u{1F482}\u{1F3FE}",
    "\u{1F482}\u{1F3FF}",
    "\u{1F477}",
    "\u{1F477}\u{1F3FB}",
    "\u{1F477}\u{1F3FC}",
    "\u{1F477}\u{1F3FD}",
    "\u{1F477}\u{1F3FE}",
    "\u{1F477}\u{1F3FF}",
    "\u{1F473}",
    "\u{1F473}\u{1F3FB}",
    "\u{1F473}\u{1F3FC}",
    "\u{1F473}\u{1F3FD}",
    "\u{1F473}\u{1F3FE}",
    "\u{1F473}\u{1F3FF}",
    "\u{1F471}",
    "\u{1F471}\u{1F3FB}",
    "\u{1F471}\u{1F3FC}",
    "\u{1F471}\u{1F3FD}",
    "\u{1F471}\u{1F3FE}",
    "\u{1F471}\u{1F3FF}",
    "\u{1F385}",
    "\u{1F385}\u{1F3FB}",
    "\u{1F385}\u{1F3FC}",
    "\u{1F385}\u{1F3FD}",
    "\u{1F385}\u{1F3FE}",
    "\u{1F385}\u{1F3FF}",
    "\u{1F936}",
    "\u{1F936}\u{1F3FB}",
    "\u{1F936}\u{1F3FC}",
    "\u{1F936}\u{1F3FD}",
    "\u{1F936}\u{1F3FE}",
    "\u{1F936}\u{1F3FF}",
    "\u{1F478}",
    "\u{1F478}\u{1F3FB}",
    "\u{1F478}\u{1F3FC}"
  ];

  // src/definitions/elements.ts
  var chatHistoryElement = querySelector("#chat-history");
  var chatInputElement = querySelector("#chat-input");
  var chatInputContainerElement = querySelector("#chat-input-container");
  var presenceIndicatorElement = querySelector("#presence-indicator");
  var emojiListElement = querySelector(".emojiList");
  var setupEmojiListElement = () => {
    emojiListElement = document.createElement("div");
    emojiListElement.className = "emojiList";
    emojiListElement.innerHTML = emojis.map((e) => `<p style="cursor: pointer;" class="emoji">${e}</p>`).join("");
    chatInputContainerElement.prepend(emojiListElement);
  };
  var extensionStyleElement = querySelector(".styles");
  var setupExtensionStyleElement = () => {
    extensionStyleElement = document.createElement("style");
    extensionStyleElement.className = "styles";
    addStylesheet();
    document.head.appendChild(extensionStyleElement);
  };
  var gifLoaderInputElement = querySelector(".gif-loader-input");
  var setupGifLoaderInputElement = () => {
    gifLoaderInputElement = document.createElement("input");
    gifLoaderInputElement.className = "gif-loader-input";
    gifLoaderInputElement.placeholder = "search for gif";
    presenceIndicatorElement.append(gifLoaderInputElement);
  };
  var gifListElement = querySelector(".gifList");
  var getMessageElements = () => {
    var _a;
    return [...(_a = document.querySelectorAll(".message-txt")) != null ? _a : []];
  };

  // src/emoji-mapper.ts
  var EmojiMapper = class {
    static register() {
      [...emojiListElement.children].forEach((child) => {
        child.addEventListener("click", (e) => {
          e.stopPropagation();
          chatInputElement.value = chatInputElement.value + e.target.innerText;
        });
      });
    }
    static escapeSpecialChars(regex) {
      return regex.replace(/([()[{*+.$^\\|?])/g, "\\$1");
    }
  };

  // src/setup-elements.ts
  var setupElements = () => {
    emojiListElement && emojiListElement.remove();
    !emojiListElement && setupEmojiListElement();
    extensionStyleElement && extensionStyleElement.remove();
    !extensionStyleElement && setupExtensionStyleElement();
    gifLoaderInputElement && gifLoaderInputElement.remove();
    !gifLoaderInputElement && setupGifLoaderInputElement();
    chatInputElement && (chatInputElement.oninput = null);
  };

  // src/index.ts
  setupElements();
  setTimeout(() => {
    EmojiMapper.register();
    console.log("setup done!");
    chatHistoryElement.addEventListener("DOMNodeInserted", () => {
      setTimeout(() => {
        getMessageElements().forEach((msg) => {
          const txt = msg.children[1].innerText;
          if (txt.includes("::<img")) {
            msg.children[1].outerHTML = msg.children[1].innerText;
          }
        });
      }, 500);
    }, false);
  }, 200);
})();
