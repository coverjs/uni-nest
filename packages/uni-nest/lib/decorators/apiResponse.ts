import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import {
  ReferenceObject,
  SchemaObject,
} from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { CommonResponseVo } from '../schemas';
import { UnityResponseOptions } from '../types';

type Model = SchemaObject | ReferenceObject;

// 处理数据类型模型
const handleModel = (
  options: UnityResponseOptions & { model?: Type<any>; example?: any },
): SchemaObject | ReferenceObject => {
  const { type, description, model, example } = options;

  switch (type) {
    case 'object':
      if (!model) return {};
      return {
        properties: {
          data: {
            description,
            allOf: [{ $ref: getSchemaPath(model) }],
          },
        },
      } as Model;

    case 'list':
      if (!model) return {};
      return {
        properties: {
          data: {
            description,
            required: ['list', 'total'],
            properties: {
              list: { type: 'array', items: { $ref: getSchemaPath(model) } },
              total: { type: 'number', default: 0 },
            },
          },
        },
      } as Model;
    case 'array':
      if (!options.arrayItemType && !model) return {};
      return {
        properties: {
          data: {
            description,
            type: 'array',
            example,
            items: { type: options.arrayItemType, $ref: getSchemaPath(model) },
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
  options: UnityResponseOptions,
): ApiResponseOptions => {
  const { status, title } = options;
  return {
    status,
    schema: {
      title: title || '响应示例：',
      allOf: [{ $ref: getSchemaPath(CommonResponseVo) }, handleModel(options)],
    },
  };
};

// 自定义 swagger 统一响应数据模型
export const UniApiResponse = (
  options?: UnityResponseOptions & { model?: Type<any> },
) => {
  if (!options.type) options.type = 'object';
  const { model } = options;

  let decorators = [ApiResponse(handleSwaggerResponse(options))];

  if (model) decorators = [...decorators, ApiExtraModels(model)];

  return applyDecorators(...decorators);
};
