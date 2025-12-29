import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RootDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): RootDto {
    return this.appService.getHello();
  }

  @Get('health')
  healthCheck() {
    return { status: 'ok' };
  }
}
