import { HttpCode, SetMetadata, applyDecorators } from '@nestjs/common';
import { BUSINESS_HTTP_CODE_KEY } from 'lib/constants';
/**
 *
 * @param code 定义状态码
 * @returns
 */
export const UniHttpCode = (code: number) => {
  return applyDecorators(
    SetMetadata(BUSINESS_HTTP_CODE_KEY, code),
    HttpCode(code),
  );
};
