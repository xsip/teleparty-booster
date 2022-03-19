export const querySelector = <T = HTMLElement>(selector: string): T => {
    return document.querySelector(selector) as unknown as T;
}