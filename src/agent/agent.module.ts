import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { GiphyService } from '../giphy/giphy.service';

@Module({
  controllers: [AgentController],
  providers: [AgentService, GiphyService],
})
export class AgentModule {}
