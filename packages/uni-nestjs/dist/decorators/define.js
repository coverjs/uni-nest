"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniDefine = void 0;
const constants_1 = require("../constants");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const httpCode_1 = require("./httpCode");
const _1 = require(".");
const constants_2 = require("../constants");
const apiResponse_1 = require("./apiResponse");
/**
 * 定义接口装饰器
 * @param options
 * @returns
 */
const UniDefine = (options) => {
    const { query, path = "", method = constants_2.Method.Get, httpCode = 200, isPublic, response, body, summary, description, param, } = options;
    let decoratorsArr = [
        (0, swagger_1.ApiOperation)({ summary, description }),
        constants_1.MethodMap[method](path),
        (0, httpCode_1.UniHttpCode)(httpCode),
    ];
    const addDecorators = (decorators) => {
        decoratorsArr = [...decoratorsArr, decorators];
    };
    addDecorators((0, apiResponse_1.UniApiResponse)({ ...response, status: httpCode }));
    if (!isPublic)
        addDecorators((0, swagger_1.ApiBearerAuth)());
    if (isPublic)
        addDecorators((0, _1.Public)());
    // if (isAllowNoPerm) addDecorators(AllowNoPerm());
    if (query)
        addDecorators((0, swagger_1.ApiQuery)(query));
    if (body)
        addDecorators((0, swagger_1.ApiBody)(body));
    if (param)
        addDecorators((0, swagger_1.ApiParam)(param));
    return (0, common_1.applyDecorators)(...decoratorsArr);
};
exports.UniDefine = UniDefine;
//# sourceMappingURL=define.js.map