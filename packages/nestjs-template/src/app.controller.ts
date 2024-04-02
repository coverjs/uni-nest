import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Method, UniDefine } from 'uni-nest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UniDefine({
    summary: '测试get请求',
    isPublic: true,
    response: {
      type: 'string',
    },
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @UniDefine({
    summary: '测试post请求',
    isPublic: true,
    method: Method.Post,
    description: '测试post请求的描述',
    httpCode: 200,
  })
  testPost() {
    return this.appService.testPost();
  }
}
