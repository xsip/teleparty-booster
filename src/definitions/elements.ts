import { querySelector } from '../helper/element.helper';
import {addStylesheet} from '../styles';
import {emojis} from './emojis';

export const chatHistoryElement: HTMLDivElement = querySelector('#chat-history');
export const chatInputElement: HTMLInputElement = querySelector("#chat-input");
export const chatInputContainerElement: HTMLInputElement = querySelector("#chat-input-container");
export const presenceIndicatorElement: HTMLDivElement = querySelector("#presence-indicator");

export let emojiListElement: HTMLDivElement = querySelector('.emojiList');

export const setupEmojiListElement = () => {
    emojiListElement = document.createElement('div')
    emojiListElement.className = 'emojiList';
    emojiListElement.innerHTML = emojis.map(
        (e) => `<p style="cursor: pointer;" class="emoji">${e}</p>`
    ).join('');
        chatInputContainerElement.prepend(emojiListElement);

}

export let extensionStyleElement: HTMLStyleElement = querySelector(".styles");
export const setupExtensionStyleElement = () => {
    extensionStyleElement = document.createElement('style')
    extensionStyleElement.className = 'styles';
    addStylesheet();
    document.head.appendChild(extensionStyleElement);
}

export let gifLoaderInputElement: HTMLInputElement = querySelector('.gif-loader-input');
export const setupGifLoaderInputElement = () => {
    gifLoaderInputElement = document.createElement('input');
    gifLoaderInputElement.className = 'gif-loader-input';
    gifLoaderInputElement.placeholder = 'search for gif';
    presenceIndicatorElement.append(gifLoaderInputElement);

}

export let gifListElement: HTMLDivElement = querySelector('.gifList');
export const setupGifListElement = () => {
    gifListElement = document.createElement('div')
    gifListElement.className = 'gifList';
}


// @ts-ignore
export const getMessageElements = (): HTMLDivElement[] => [...((document.querySelectorAll('.message-txt')as HTMLDivElement) ?? [])];
