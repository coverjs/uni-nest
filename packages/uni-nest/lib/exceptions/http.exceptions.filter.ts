// Copyright 2024 hacxy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as dayjs from 'dayjs';
import type { Request, Response } from 'express';
import { UniBusinessException } from './business.exceptions';

/**
 * http异常过滤器
 */
@Catch(HttpException)
export class UniHttpExeptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const respones = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exResponse: any = exception.getResponse();
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss');

    // 处理自定义业务异常
    if (exception instanceof UniBusinessException) {
      const error: any = exception.getResponse();

      console.log(error);
      respones.status(error.statusCode || respones.statusCode).send({
        code: error.code,
        msg: error.msg,
      });
      return;
    }

    let responseJson: any = {};
    // 系统异常
    if (typeof exResponse === 'string') {
      responseJson = {
        code: status,
        timestamp: time,
        path: request.url,
        msg: exResponse,
      };
    } else {
      responseJson = {
        code: status,
        timestamp: time,
        path: request.url,
        msg: exResponse.message,
      };
    }

    respones.status(HttpStatus[status] ? status : 500).json(responseJson);
  }
}
