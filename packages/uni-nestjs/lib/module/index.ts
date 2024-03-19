import { Module } from "@nestjs/common";
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { UniBaseExceptionsFilter, UniHttpExeptionsFilter } from "../exceptions";
import { JwtAuthGuard } from "../guard";
import { ModuleType, Options } from "../types";
import { UniResponseInterceptor } from "../interceptor";

export const handleUniModule = (module: ModuleType, options: Options) => {
  @Module({
    imports: [module],
    providers: [
      {
        provide: "JwtVerifyOptions",
        useValue: options?.jwtVerifyOptions || {},
      },
      {
        provide: APP_GUARD,
        useClass: JwtAuthGuard,
      },
      // 统一响应格式
      {
        provide: APP_INTERCEPTOR,
        useValue: new UniResponseInterceptor(),
      },
      // 注册基本错误过滤器
      {
        provide: APP_FILTER,
        useClass: UniBaseExceptionsFilter,
      },
      // 注册http错误过滤器
      {
        provide: APP_FILTER,
        useClass: UniHttpExeptionsFilter,
      },
    ],
  })
  class UniAppModule {}

  return UniAppModule;
};
