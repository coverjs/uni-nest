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

import { HttpException } from '@nestjs/common';
import { BUSINESS_ERROR_CODE } from 'lib/main';
import { BusinessError } from './constants';

/**
 * 自定义业务异常
 */
export class UniBusinessException extends HttpException {
  constructor(err: BusinessError | string) {
    // 处理公共错误
    if (typeof err === 'string') {
      err = {
        code: BUSINESS_ERROR_CODE.COMMON.code,
        msg: err,
      };
    }
    super(err, BUSINESS_ERROR_CODE.COMMON.code);
  }

  /**
   * 抛出公共异常
   */
  static throwCommonError() {
    throw new UniBusinessException(BUSINESS_ERROR_CODE.COMMON);
  }

  /**
   * 无权限
   */
  static throwForbidden() {
    throw new UniBusinessException(BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN);
  }

  /**
   * 字段不合法
   * @param msg
   */
  static throwFieldsIncorrect(msg: string = '字段不合法') {
    throw new UniBusinessException({
      code: BUSINESS_ERROR_CODE.FIELD_INCORRECT.code,
      msg,
    });
  }

  /**
   * 无效token或已过期
   */
  static throwInvalidToken() {
    throw new UniBusinessException(BUSINESS_ERROR_CODE.INVALID_TOKEN);
  }

  /**
   * 用户不存在
   */
  // static throwUserNotExist() {
  //   throw new BusinessException(BUSINESS_ERROR_CODE.USER_DOES_NOT_EXIST);
  // }

  /**
   * 数据已被保护
   */
  // static throwDataProtected() {
  //   throw new BusinessException(BUSINESS_ERROR_CODE.DATA_PROTECTED);
  // }
}
