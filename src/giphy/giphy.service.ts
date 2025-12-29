import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { GiphySearchResponse, GiphyGif } from './giphy.types';

export interface GifResult {
  id: string;
  title: string;
  url: string;
}

@Injectable()
export class GiphyService {
  async search(query: string): Promise<GifResult[]> {
    const res = await axios.get<GiphySearchResponse>(
      'https://api.giphy.com/v1/gifs/search',
      {
        params: {
          api_key: process.env.GIPHY_API_KEY,
          q: query,
          limit: 5,
          rating: 'g',
        },
      },
    );

    return res.data.data.map(
      (g: GiphyGif): GifResult => ({
        id: g.id,
        title: g.title,
        url: g.images.original.url,
      }),
    );
  }
}
