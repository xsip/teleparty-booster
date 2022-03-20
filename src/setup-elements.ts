import {
    chatInputElement,
    setupEmojiListElement,
    setupExtensionStyleElement,
    setupGifListElement,
    setupGifLoaderInputElement,
    emojiListElement,
    extensionStyleElement,
    gifListElement,
    gifLoaderInputElement
} from './definitions/elements';

export const setupElements = (): void => {
    emojiListElement && emojiListElement.remove();
    !emojiListElement && setupEmojiListElement();

    extensionStyleElement && extensionStyleElement.remove();
    !extensionStyleElement && setupExtensionStyleElement();

    gifLoaderInputElement && gifLoaderInputElement.remove();
    !gifLoaderInputElement && setupGifLoaderInputElement();

    // gifListElement && gifListElement.remove();
    // !gifListElement && setupGifListElement();

    chatInputElement && (chatInputElement.oninput = null);
}