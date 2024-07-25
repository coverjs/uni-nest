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
        msg: err
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
   * 无效token或已过期
   */
  static throwInvalidToken() {
    throw new UniBusinessException(BUSINESS_ERROR_CODE.INVALID_TOKEN);
  }
}
