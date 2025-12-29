export interface GiphyImageOriginal {
  url: string;
}

export interface GiphyImages {
  original: GiphyImageOriginal;
}

export interface GiphyGif {
  id: string;
  title: string;
  images: GiphyImages;
}

export interface GiphySearchResponse {
  data: GiphyGif[];
}
