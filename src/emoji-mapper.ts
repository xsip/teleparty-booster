import { emojiMap } from "./definitions/emojis";
import {chatInputElement, emojiListElement} from "./definitions/elements";

export class EmojiMapper {
    public static register() {

        // @ts-ignore
        chatInputElement.oninput = function (event: InputEvent) {
            const target: HTMLInputElement | null = (event.target as HTMLInputElement);
            if(!target) {
                return;
            }
            for (const i in emojiMap) {
                const regex = new RegExp(EmojiMapper.escapeSpecialChars(i), "gim");
                target.value = target.value = target.value.replace(regex, emojiMap[i]);
            }
        };

        [...emojiListElement.children].forEach((child: Element) => {
            (child as HTMLParagraphElement).addEventListener("click", (e: MouseEvent) => {
                e.stopPropagation();
                chatInputElement.value = chatInputElement.value + (e.target as HTMLParagraphElement).innerText;
            });
        });
    }

    private static escapeSpecialChars(regex: string) {
        return regex.replace(/([()[{*+.$^\\|?])/g, "\\$1");
    }
}