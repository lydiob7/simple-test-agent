import { BadRequestException, Injectable } from '@nestjs/common';
import { GiphyService } from '../giphy/giphy.service';
import { callClaude } from './claude.client';

@Injectable()
export class AgentService {
  constructor(private readonly giphy: GiphyService) {}

  async run(task: string) {
    if (!task?.trim()?.length)
      throw new BadRequestException('Task is required');
    const claude = await callClaude(
      `Extract a concise Giphy search query from: "${task}". Respond with only the query.`,
    );

    const textBlock = claude.content[0];
    if (!textBlock || textBlock.type !== 'text') {
      throw new Error('Invalid Claude response');
    }

    const query = textBlock.text.trim();

    const gifs = await this.giphy.search(query);

    return {
      query,
      gif: gifs[0] ?? null,
    };
  }
}
