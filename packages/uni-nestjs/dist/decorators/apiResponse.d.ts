import { Type } from "@nestjs/common";
import { UnityResponseOptions } from "../types";
export declare const UniApiResponse: (options?: UnityResponseOptions & {
    schema?: Type<any>;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
