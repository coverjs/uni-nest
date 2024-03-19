import { MethodMap } from "../constants";
import { applyDecorators } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
} from "@nestjs/swagger";
import { UniHttpCode } from "lib/decorators/httpCode";
import { Public } from ".";
import { Method } from "../constants";
import { DefineApiOptions } from "../types";
import { UniApiResponse } from "./apiResponse";

/**
 * 定义接口装饰器
 * @param options
 * @returns
 */
export const UniDefine = (options: DefineApiOptions) => {
  const {
    query,
    path = "",
    method = Method.Get,
    httpCode = 200,
    isPublic,
    response,
    body,
    summary,
    description,
    param,
  } = options;
  let decoratorsArr = [
    ApiOperation({ summary, description }),
    MethodMap[method](path),
    UniHttpCode(httpCode),
  ];

  const addDecorators = (decorators) => {
    decoratorsArr = [...decoratorsArr, decorators];
  };

  addDecorators(UniApiResponse({ ...(response as any), status: httpCode }));

  if (!isPublic) addDecorators(ApiBearerAuth());
  if (isPublic) addDecorators(Public());
  // if (isAllowNoPerm) addDecorators(AllowNoPerm());
  if (query) addDecorators(ApiQuery(query));
  if (body) addDecorators(ApiBody(body));
  if (param) addDecorators(ApiParam(param));

  return applyDecorators(...decoratorsArr);
};
