import axios from 'axios';
import { ClaudeResponse } from './claude.types';

export async function callClaude(prompt: string): Promise<ClaudeResponse> {
  const res = await axios.request<ClaudeResponse>({
    method: 'POST',
    url: 'https://api.anthropic.com/v1/messages',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY as string,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    data: {
      model: 'claude-haiku-4-5',
      max_tokens: 50,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    },
    transitional: {
      silentJSONParsing: false,
    },
  });

  return res.data;
}
