import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class UniBaseExceptionsFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
