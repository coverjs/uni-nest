import { HttpException } from '@nestjs/common';
import { BusinessError } from './constants';
/**
 * 自定义业务异常
 */
export declare class UniBusinessException extends HttpException {
    constructor(err: BusinessError | string);
    /**
     * 抛出公共异常
     */
    static throwCommonError(): void;
    /**
     * 无权限
     */
    static throwForbidden(): void;
    /**
     * 字段不合法
     * @param msg
     */
    static throwFieldsIncorrect(msg?: string): void;
    /**
     * 无效token或已过期
     */
    static throwInvalidToken(): void;
}
