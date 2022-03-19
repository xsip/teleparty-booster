import {extensionStyleElement} from './definitions/elements';

export const addStylesheet = (): void => {
    extensionStyleElement.className = 'styles';
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
}