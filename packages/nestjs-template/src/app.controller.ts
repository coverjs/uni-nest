import { Body, Controller, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Method, UniDefine } from 'uni-nestjs';
import { AppValue } from 'src/app.vo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UniDefine({
    summary: '测试get请求',
    isPublic: true,
    path: ':id',
    param: {
      name: 'id',
    },
    response: {
      type: 'string',
    },
  })
  getHello(@Param() param): string {
    console.log(param);
    return this.appService.getHello();
  }

  @UniDefine({
    summary: '测试post请求',
    isPublic: true,
    method: Method.Post,
    description: '测试post请求的描述',
    httpCode: 200,
    // query: {
    //   type: AppValue,
    // },
    // body: {
    //   type: AppValue,
    // },
    param: {
      name: 'id',
    },
    response: {
      schema: AppValue,
    },
  })
  testPost(@Body() data) {
    console.log(data);
    return this.appService.testPost();
  }
}
