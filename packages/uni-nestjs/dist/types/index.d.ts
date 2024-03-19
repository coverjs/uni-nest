import { Type } from "@nestjs/common";
import {
  ApiBodyOptions,
  ApiParamOptions,
  ApiQueryOptions,
} from "@nestjs/swagger";
import { Method } from "../constants";

export * from "./bootstrap";
export type MethodType = "Post" | "Get" | "Delete" | "Put" | "Patch";
export type IType = "boolean" | "number" | "string" | "array" | Type<any>;
export interface ResponseOptions {
  /**
   * @summary 响应信息标题
   */
  title?: string;
  /**
   * @summary 响应状态码
   */
  status?: number;
  /**
   * @summary 响应描述信息
   */
  description?: string;
  /**
   * @summary 请求方式
   */
  method?: Method;
  /**
   * @summary 请求路由
   */
  path?: string | string[];
}
export interface ListResponseOptions extends ResponseOptions {
  type: Type<any>;
}

type SchemaType =
  | {
      type?: "number";
      /**
       * 示例
       */
      example?: any;
    }
  | {
      type?: "string";
      /**
       * 示例
       */
      example?: any;
    }
  | {
      type?: "boolean";
    }
  | {
      type?: "object";
      schema?: Type<any>;
    }
  | {
      type?: "array";
      schema?: Type<any>;
      arrayItemType?: "string" | "number";
      /**
       * 示例
       */
      example?: any;
    }
  | {
      type?: "list";
      schema: Type<any>;
    };
export type UnityResponseOptions = ResponseOptions & SchemaType;
export interface DefineApiOptions {
  /**
   * @summar 为swagger定义接口的摘要信息
   */
  summary?: string;
  /**
   * @summar 为swagger定义接口的描述信息
   */
  description?: string;
  /**
   * @summary 定义接口的路由
   */
  path?: string;
  /**
   * @summary 定义接口请求方式
   * @default Get
   */
  method?: Method;
  /**
   * @default 200
   * @summar 定义接口响应状态码
   */
  httpCode?: number;
  /**
   * @summar 接口是否放开
   * @default false
   */
  isPublic?: boolean;
  // /**
  //  * @summary 接口是否忽略权限校验
  //  * @default false
  //  */
  // isAllowNoPerm?: boolean;
  /**
   * @summary 为swagger定义接口的query数据片段类型
   */
  query?: ApiQueryOptions;
  /**
   * @summar 为swagger定义接口的body体数据片段类型
   */
  body?: ApiBodyOptions;
  /**
   * @summary 为swagger定义动态参数数据片段类型
   */
  param?: ApiParamOptions;
  /**
   * @summar 为swagger定义响应数据片段类型
   */
  response?: Omit<ResponseOptions, "status"> & SchemaType;
}
