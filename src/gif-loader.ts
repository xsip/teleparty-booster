import {GiphyResponse} from './types/giphy-response.types';
import {chatInputContainerElement, chatInputElement, gifLoaderInputElement} from './definitions/elements';
import {TenorResponse, Tinygif} from './types/tenor-response.types';


export class GifLoader {
    constructor() {
    }

    currentList?: HTMLDivElement;
    setup(): void {
        // @ts-ignore
        gifLoaderInputElement.onkeydown = async (event: KeyboardEvent) => {
            event.stopPropagation();
            if(event.key !== 'Enter') {
                return;
            }
            const target: HTMLInputElement | null = (event.target as HTMLInputElement);
            if(!target) {
                return;
            }

            if(!(!!target.value)) {
                this.currentList?.remove();
                return;
            }
            // console.log('key ', event.key, target.value);
            // await this.searchForGifGiphy(target.value);
            await this.searchForGifTenor(target.value);
        }
    }

    private searchForGifTenor(searchFor: string): Promise<void | Response> {
        // this.currentList = this.addgifListElement(sampleRes);
        return fetch('https://g.tenor.com/v1/search?q='+searchFor+'&key=LIVDSRZULELA&limit=8')
            .then(response => response.json())
            .then((data: TenorResponse) => {
                // @ts-ignore
                this.currentList = this.addTenorListElement(data);
            });
    }

    private searchForGifGiphy(searchFor: string): Promise<void | Response> {
        // this.currentList = this.addgifListElement(sampleRes);
        return fetch('https://api.giphy.com/v1/gifs/search?limit=20&api_key=dc6zaTOxFJmzC&q='+searchFor)
            .then(response => response.json())
            .then((data: GiphyResponse) => {
                // @ts-ignore
                this.currentList = this.addgifListElement(data);
            });
    }



    addgifListElement = (giphyResponse: GiphyResponse): HTMLDivElement => {
        let d = document.createElement("div");
        d.className = "gifList";
        const gifsForRender = giphyResponse.data.map(
            (e) => {
                const img = e.images.fixed_height_small;
             return `<img src="${img.url}" width="${img.width}" width="${img.height}" class="gif-element" id="${e.id}"/>`;
            }
        );
        d.innerHTML = gifsForRender.join("");
        [...d.children].forEach((child: Element) => {
            (child as HTMLParagraphElement).addEventListener("click", (e: MouseEvent) => {
                e.stopPropagation();
                // this.searchBar.value =
                const img = (e.target as HTMLImageElement);
                // @ts-ignore
                chatInputElement.value = `::<img src="${img.src}" width="${img.width}" width="${img.height}" class="gif-element" id="${e.id}"/>::`;
            });
        });

        chatInputContainerElement.prepend(d);
        return d;
    }

    addTenorListElement = (tenorResponse: TenorResponse): HTMLDivElement => {
        let d = document.createElement("div");
        d.className = "gifList";
        const gifsForRender = tenorResponse.results.map(
            (e) => {
                const img: Tinygif = e.media[0]?.tinygif;
                return `<img src="${img.url}" width="${img.dims[0]}" width="${img.dims[1]}" class="gif-element" id="${e.id}"/>`;
            }
        );
        d.innerHTML = gifsForRender.join("");
        [...d.children].forEach((child: Element) => {
            (child as HTMLParagraphElement).addEventListener("click", (e: MouseEvent) => {
                e.stopPropagation();
                // this.searchBar.value =
                const img = (e.target as HTMLImageElement);
                // @ts-ignore
                chatInputElement.value = `::<img src="${img.src}" width="${img.width}" width="${img.height}" class="gif-element" id="${e.id}"/>::`;
            });
        });

        chatInputContainerElement?.prepend(d);
        return d;
    }


}
