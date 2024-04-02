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
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// 包装结果，将请求成功的返回结果格式统一包装起来，放入 data
@Injectable()
export class UniResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ResponseObj = context.switchToHttp().getResponse();
    ResponseObj.setHeader(
      'Cache-Control',
      'no-cache, no-store, max-age=0, must-revalidate',
    );
    return next.handle().pipe(
      map((data) => {
        return {
          code: 0,
          data,
          msg: 'ok',
        };
      }),
    );
  }
}
