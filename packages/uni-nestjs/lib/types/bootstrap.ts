import { INestApplication, NestApplicationOptions } from "@nestjs/common";
import { SwaggerOptions } from "../swagger";
import { JwtVerifyOptions } from "@nestjs/jwt";

class Module {}
export type ModuleType = typeof Module;

export interface Options {
  /**
   * @summary swagger文档配置选项
   */
  swaggerOptions?: SwaggerOptions;

  /**
   * @summary 创建app配置选项
   */
  appOptions?: NestApplicationOptions & {
    /**
     * 定义端口, 默认端口号为1118
     */
    port?: number;
  };

  beforeAppListen?: (app: INestApplication<any>) => void;

  jwtVerifyOptions?: JwtVerifyOptions;
}

export type Bootstrap = (
  module: ModuleType,
  options?: Options,
) => Promise<void>;
