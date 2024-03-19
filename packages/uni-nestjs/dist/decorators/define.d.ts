import { DefineApiOptions } from "../types";
/**
 * 定义接口装饰器
 * @param options
 * @returns
 */
export declare const UniDefine: (options: DefineApiOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
