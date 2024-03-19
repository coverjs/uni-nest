import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
/**
 * http异常过滤器
 */
export declare class UniHttpExeptionsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
