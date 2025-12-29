export interface ClaudeTextBlock {
  type: 'text';
  text: string;
}

export interface ClaudeMessage {
  role: 'assistant';
  content: ClaudeTextBlock[];
}

export interface ClaudeResponse {
  id: string;
  type: 'message';
  role: 'assistant';
  content: ClaudeTextBlock[];
}
