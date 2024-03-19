import { Type, applyDecorators } from "@nestjs/common";
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from "@nestjs/swagger";
import {
  ReferenceObject,
  SchemaObject,
} from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import { CommonResponseVo } from "../schemas";
import { UnityResponseOptions } from "../types";

type Model = SchemaObject | ReferenceObject;

// 处理数据模型
const handleModel = (
  options: UnityResponseOptions & { schema?: Type<any>; example?: any }
): SchemaObject | ReferenceObject => {
  const { type, description, schema, example } = options;

  switch (type) {
    case "object":
      if (!schema) return {};
      return {
        properties: {
          data: {
            description,
            allOf: [{ $ref: getSchemaPath(schema) }],
          },
        },
      } as Model;

    case "list":
      if (!schema) return {};
      return {
        properties: {
          data: {
            description,
            required: ["list", "total"],
            properties: {
              list: { type: "array", items: { $ref: getSchemaPath(schema) } },
              total: { type: "number", default: 0 },
            },
          },
        },
      } as Model;
    case "array":
      if (!options.arrayItemType && !schema) return {};
      return {
        properties: {
          data: {
            description,
            type: "array",
            example,
            items: { type: options.arrayItemType, $ref: getSchemaPath(schema) },
          },
        },
      } as Model;
    default:
      return {
        properties: {
          data: {
            description,
            example,
            type,
          },
        },
      } as Model;
  }
};

// 封装 swagger-ui 响应信息处理函数
const handleSwaggerResponse = (
  options: UnityResponseOptions
): ApiResponseOptions => {
  const { status, title } = options;
  return {
    status,
    schema: {
      title: title || "响应示例：",
      allOf: [{ $ref: getSchemaPath(CommonResponseVo) }, handleModel(options)],
    },
  };
};

// 自定义 swagger 统一响应数据模型
export const UniApiResponse = (
  options?: UnityResponseOptions & { schema?: Type<any> }
) => {
  if (!options.type) options.type = "object";
  const { schema } = options;

  let decorators = [ApiResponse(handleSwaggerResponse(options))];

  if (schema) decorators = [...decorators, ApiExtraModels(schema)];

  return applyDecorators(...decorators);
};
