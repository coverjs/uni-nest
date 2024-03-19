import { Injectable } from '@nestjs/common';
import { AppValue } from 'src/app.vo';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  testPost(): AppValue {
    return {
      name: 'hacxy',
    };
  }
}
