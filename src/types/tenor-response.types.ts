export interface Nanowebm {
    size: number;
    preview: string;
    url: string;
    dims: number[];
}

export interface Webm {
    preview: string;
    url: string;
    size: number;
    dims: number[];
}

export interface Tinymp4 {
    size: number;
    url: string;
    preview: string;
    duration: number;
    dims: number[];
}

export interface Nanomp4 {
    size: number;
    url: string;
    preview: string;
    duration: number;
    dims: number[];
}

export interface Loopedmp4 {
    size: number;
    preview: string;
    dims: number[];
    url: string;
    duration: number;
}

export interface Tinywebm {
    dims: number[];
    size: number;
    url: string;
    preview: string;
}

export interface Gif {
    dims: number[];
    size: number;
    preview: string;
    url: string;
}

export interface Nanogif {
    preview: string;
    size: number;
    dims: number[];
    url: string;
}

export interface Mp4 {
    size: number;
    dims: number[];
    url: string;
    preview: string;
    duration: number;
}

export interface Mediumgif {
    size: number;
    url: string;
    preview: string;
    dims: number[];
}

export interface Tinygif {
    size: number;
    url: string;
    dims: number[];
    preview: string;
}

export interface Medium {
    nanowebm: Nanowebm;
    webm: Webm;
    tinymp4: Tinymp4;
    nanomp4: Nanomp4;
    loopedmp4: Loopedmp4;
    tinywebm: Tinywebm;
    gif: Gif;
    nanogif: Nanogif;
    mp4: Mp4;
    mediumgif: Mediumgif;
    tinygif: Tinygif;
}

export interface Result {
    id: string;
    title: string;
    content_description: string;
    content_rating: string;
    h1_title: string;
    media: Medium[];
    bg_color: string;
    created: number;
    itemurl: string;
    url: string;
    tags: any[];
    flags: any[];
    shares: number;
    hasaudio: boolean;
    hascaption: boolean;
    source_id: string;
    composite?: any;
}

export interface TenorResponse {
    results: Result[];
    next: string;
}

