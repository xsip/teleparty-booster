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
  var emojiMap = {
    "o/": "\u{1F44B}",
    "</3": "\u{1F494}",
    "<3": "\u{1F497}",
    "8-D": "\u{1F601}",
    "8D": "\u{1F601}",
    ":-D": "\u{1F601}",
    "=-3": "\u{1F601}",
    "=-D": "\u{1F601}",
    "=3": "\u{1F601}",
    "=D": "\u{1F601}",
    "B^D": "\u{1F601}",
    "X-D": "\u{1F601}",
    XD: "\u{1F601}",
    "x-D": "\u{1F601}",
    xD: "\u{1F601}",
    ":')": "\u{1F602}",
    ":'-)": "\u{1F602}",
    ":-))": "\u{1F603}",
    "8)": "\u{1F604}",
    ":)": "\u{1F604}",
    ":-)": "\u{1F604}",
    ":3": "\u{1F604}",
    ":D": "\u{1F604}",
    ":]": "\u{1F604}",
    ":^)": "\u{1F604}",
    ":c)": "\u{1F604}",
    ":o)": "\u{1F604}",
    ":}": "\u{1F604}",
    ":\u3063)": "\u{1F604}",
    "=)": "\u{1F604}",
    "=]": "\u{1F604}",
    "0:)": "\u{1F607}",
    "0:-)": "\u{1F607}",
    "0:-3": "\u{1F607}",
    "0:3": "\u{1F607}",
    "0;^)": "\u{1F607}",
    "O:-)": "\u{1F607}",
    "3:)": "\u{1F608}",
    "3:-)": "\u{1F608}",
    "}:)": "\u{1F608}",
    "}:-)": "\u{1F608}",
    "*)": "\u{1F609}",
    "*-)": "\u{1F609}",
    ":-,": "\u{1F609}",
    ";)": "\u{1F609}",
    ";-)": "\u{1F609}",
    ";-]": "\u{1F609}",
    ";D": "\u{1F609}",
    ";]": "\u{1F609}",
    ";^)": "\u{1F609}",
    ":-|": "\u{1F610}",
    ":|": "\u{1F610}",
    ":(": "\u{1F612}",
    ":-(": "\u{1F612}",
    ":-<": "\u{1F612}",
    ":-[": "\u{1F612}",
    ":-c": "\u{1F612}",
    ":<": "\u{1F612}",
    ":[": "\u{1F612}",
    ":c": "\u{1F612}",
    ":{": "\u{1F612}",
    ":\u3063C": "\u{1F612}",
    "%)": "\u{1F616}",
    "%-)": "\u{1F616}",
    ":-P": "\u{1F61C}",
    ":-b": "\u{1F61C}",
    ":-p": "\u{1F61C}",
    ":-\xDE": "\u{1F61C}",
    ":-\xFE": "\u{1F61C}",
    ":P": "\u{1F61C}",
    ":b": "\u{1F61C}",
    ":p": "\u{1F61C}",
    ":\xDE": "\u{1F61C}",
    ":\xFE": "\u{1F61C}",
    ";(": "\u{1F61C}",
    "=p": "\u{1F61C}",
    "X-P": "\u{1F61C}",
    XP: "\u{1F61C}",
    "d:": "\u{1F61C}",
    "x-p": "\u{1F61C}",
    xp: "\u{1F61C}",
    ":-||": "\u{1F620}",
    ":@": "\u{1F620}",
    ":-.": "\u{1F621}",
    ":-/": "\u{1F621}",
    ":/": "\u{1F621}",
    ":L": "\u{1F621}",
    ":S": "\u{1F621}",
    ":\\": "\u{1F621}",
    "=/": "\u{1F621}",
    "=L": "\u{1F621}",
    "=\\": "\u{1F621}",
    ":'(": "\u{1F622}",
    ":'-(": "\u{1F622}",
    "^5": "\u{1F624}",
    "^<_<": "\u{1F624}",
    "o/\\o": "\u{1F624}",
    "|-O": "\u{1F62B}",
    "|;-)": "\u{1F62B}",
    ":###..": "\u{1F630}",
    ":-###..": "\u{1F630}",
    "D-':": "\u{1F631}",
    D8: "\u{1F631}",
    "D:": "\u{1F631}",
    "D:<": "\u{1F631}",
    "D;": "\u{1F631}",
    "D=": "\u{1F631}",
    DX: "\u{1F631}",
    "v.v": "\u{1F631}",
    "8-0": "\u{1F632}",
    ":-O": "\u{1F632}",
    ":-o": "\u{1F632}",
    ":O": "\u{1F632}",
    ":o": "\u{1F632}",
    "O-O": "\u{1F632}",
    O_O: "\u{1F632}",
    O_o: "\u{1F632}",
    "o-o": "\u{1F632}",
    o_O: "\u{1F632}",
    o_o: "\u{1F632}",
    ":$": "\u{1F633}",
    "#-)": "\u{1F635}",
    ":#": "\u{1F636}",
    ":&": "\u{1F636}",
    ":-#": "\u{1F636}",
    ":-&": "\u{1F636}",
    ":-X": "\u{1F636}",
    ":X": "\u{1F636}",
    ":-J": "\u{1F63C}",
    ":*": "\u{1F63D}",
    ":^*": "\u{1F63D}",
    \u0CA0_\u0CA0: "\u{1F645}",
    "*\\0/*": "\u{1F646}",
    "\\o/": "\u{1F646}",
    ":>": "\u{1F604}",
    ">.<": "\u{1F621}",
    ">:(": "\u{1F620}",
    ">:)": "\u{1F608}",
    ">:-)": "\u{1F608}",
    ">:/": "\u{1F621}",
    ">:O": "\u{1F632}",
    ">:P": "\u{1F61C}",
    ">:[": "\u{1F612}",
    ">:\\": "\u{1F621}",
    ">;)": "\u{1F608}",
    ">_>^": "\u{1F624}"
  };

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
  var setupGifListElement = () => {
    gifListElement = document.createElement("div");
    gifListElement.className = "gifList";
  };
  var getMessageElements = () => {
    var _a;
    return [...(_a = document.querySelectorAll(".message-txt")) != null ? _a : []];
  };

  // src/emoji-mapper.ts
  var EmojiMapper = class {
    static register() {
      chatInputElement.oninput = function(event) {
        const target = event.target;
        if (!target) {
          return;
        }
        for (const i in emojiMap) {
          const regex = new RegExp(EmojiMapper.escapeSpecialChars(i), "gim");
          target.value = target.value = target.value.replace(regex, emojiMap[i]);
        }
      };
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
    gifListElement && gifListElement.remove();
    !gifListElement && setupGifListElement();
    chatInputElement && (chatInputElement.oninput = null);
  };

  // src/gif-loader.ts
  var GifLoader = class {
    constructor() {
      this.addgifListElement = (giphyResponse) => {
        let d = document.createElement("div");
        d.className = "gifList";
        const gifsForRender = giphyResponse.data.map((e) => {
          const img = e.images.fixed_height_small;
          return `<img src="${img.url}" width="${img.width}" width="${img.height}" class="gif-element" id="${e.id}"/>`;
        });
        d.innerHTML = gifsForRender.join("");
        [...d.children].forEach((child) => {
          child.addEventListener("click", (e) => {
            e.stopPropagation();
            const img = e.target;
            chatInputElement.value = `::<img src="${img.src}" width="${img.width}" width="${img.height}" class="gif-element" id="${e.id}"/>::`;
          });
        });
        chatInputContainerElement.prepend(d);
        return d;
      };
      this.addTenorListElement = (tenorResponse) => {
        var _a;
        let d = document.createElement("div");
        d.className = "gifList";
        const gifsForRender = tenorResponse.results.map((e) => {
          var _a2;
          const img = (_a2 = e.media[0]) == null ? void 0 : _a2.tinygif;
          return `<img src="${img.url}" width="${img.dims[0]}" width="${img.dims[1]}" class="gif-element" id="${e.id}"/>`;
        });
        d.innerHTML = gifsForRender.join("");
        [...d.children].forEach((child) => {
          child.addEventListener("click", (e) => {
            e.stopPropagation();
            const img = e.target;
            chatInputElement.value = `::<img src="${img.src}" width="${img.width}" width="${img.height}" class="gif-element" id="${e.id}"/>::`;
          });
        });
        (_a = chatInputContainerElement) == null ? void 0 : _a.prepend(d);
        return d;
      };
    }
    addToDom() {
      gifLoaderInputElement.onkeydown = (event) => __async(this, null, function* () {
        var _a;
        event.stopPropagation();
        if (event.key !== "Enter") {
          return;
        }
        const target = event.target;
        if (!target) {
          return;
        }
        if (!!!target.value) {
          (_a = this.currentList) == null ? void 0 : _a.remove();
          return;
        }
        yield this.searchForGifTenor(target.value);
      });
    }
    searchForGifTenor(searchFor) {
      return fetch("https://g.tenor.com/v1/search?q=" + searchFor + "&key=LIVDSRZULELA&limit=8").then((response) => response.json()).then((data) => {
        this.currentList = this.addTenorListElement(data);
      });
    }
    searchForGifGiphy(searchFor) {
      return fetch("https://api.giphy.com/v1/gifs/search?limit=20&api_key=dc6zaTOxFJmzC&q=" + searchFor).then((response) => response.json()).then((data) => {
        this.currentList = this.addgifListElement(data);
      });
    }
  };

  // src/index.ts
  setupElements();
  setTimeout(() => {
    const gifLoader = new GifLoader();
    gifLoader.addToDom();
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
