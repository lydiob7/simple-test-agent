import { Controller, Post, Body } from '@nestjs/common';
import { AgentService } from './agent.service';

@Controller('agent')
export class AgentController {
  constructor(private readonly agent: AgentService) {}

  @Post('gif')
  async getGif(@Body('task') task: string) {
    return this.agent.run(task);
  }
}
