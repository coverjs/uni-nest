"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniApiResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const schemas_1 = require("../schemas");
// 处理数据模型
const handleModel = (options) => {
    const { type, description, schema, example } = options;
    switch (type) {
        case "object":
            if (!schema)
                return {};
            return {
                properties: {
                    data: {
                        description,
                        allOf: [{ $ref: (0, swagger_1.getSchemaPath)(schema) }],
                    },
                },
            };
        case "list":
            if (!schema)
                return {};
            return {
                properties: {
                    data: {
                        description,
                        required: ["list", "total"],
                        properties: {
                            list: { type: "array", items: { $ref: (0, swagger_1.getSchemaPath)(schema) } },
                            total: { type: "number", default: 0 },
                        },
                    },
                },
            };
        case "array":
            if (!options.arrayItemType && !schema)
                return {};
            return {
                properties: {
                    data: {
                        description,
                        type: "array",
                        example,
                        items: { type: options.arrayItemType, $ref: (0, swagger_1.getSchemaPath)(schema) },
                    },
                },
            };
        default:
            return {
                properties: {
                    data: {
                        description,
                        example,
                        type,
                    },
                },
            };
    }
};
// 封装 swagger-ui 响应信息处理函数
const handleSwaggerResponse = (options) => {
    const { status, title } = options;
    return {
        status,
        schema: {
            title: title || "响应示例：",
            allOf: [{ $ref: (0, swagger_1.getSchemaPath)(schemas_1.CommonResponseVo) }, handleModel(options)],
        },
    };
};
// 自定义 swagger 统一响应数据模型
const UniApiResponse = (options) => {
    if (!options.type)
        options.type = "object";
    const { schema } = options;
    let decorators = [(0, swagger_1.ApiResponse)(handleSwaggerResponse(options))];
    if (schema)
        decorators = [...decorators, (0, swagger_1.ApiExtraModels)(schema)];
    return (0, common_1.applyDecorators)(...decorators);
};
exports.UniApiResponse = UniApiResponse;
//# sourceMappingURL=apiResponse.js.map