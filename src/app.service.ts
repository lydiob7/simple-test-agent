import { Injectable } from '@nestjs/common';
import { RootDto } from './app.dto';

@Injectable()
export class AppService {
  getHello(): RootDto {
    return {
      message: 'This is a very simple Giphy agent',
      endpoints: [
        {
          method: 'POST',
          path: '/agent/gif',
          payload: { task: 'string' },
          returnType: {
            query: 'string',
            gif: {
              id: 'string',
              title: 'string',
              url: 'string',
            },
          },
        },
      ],
    };
  }
}
