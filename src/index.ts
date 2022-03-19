import {EmojiMapper} from './emoji-mapper';
import {setupElements} from './setup-elements';
import {GifLoader} from './gif-loader';
import {chatHistoryElement, getMessageElements} from './definitions/elements';

setupElements();

setTimeout(() => {
    const gifLoader = new GifLoader();
    gifLoader.addToDom();
    EmojiMapper.register();

    console.log('setup done!');

    chatHistoryElement.addEventListener('DOMNodeInserted', () => {
        setTimeout(() => {
            getMessageElements().forEach((msg: HTMLDivElement) => {
                const txt = (msg.children[1] as HTMLParagraphElement).innerText;
                if (txt.includes('::<img')) {
                    msg.children[1].outerHTML = (msg.children[1] as HTMLParagraphElement).innerText;
                }
            })
        }, 500);
    }, false)

},200)






