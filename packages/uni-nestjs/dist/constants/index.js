"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PORT = exports.IS_PUBLIC_KEY = exports.BUSINESS_HTTP_CODE_KEY = exports.MethodMap = exports.Method = void 0;
const common_1 = require("@nestjs/common");
var Method;
(function (Method) {
    Method["Get"] = "GET";
    Method["Post"] = "POST";
    Method["Put"] = "PUT";
    Method["Delete"] = "DELETE";
    Method["Patch"] = "PATCH";
})(Method || (exports.Method = Method = {}));
// 请求方法映射
exports.MethodMap = {
    [Method.Get]: common_1.Get,
    [Method.Post]: common_1.Post,
    [Method.Put]: common_1.Put,
    [Method.Delete]: common_1.Delete,
    [Method.Patch]: common_1.Patch,
};
exports.BUSINESS_HTTP_CODE_KEY = "HttpCode";
exports.IS_PUBLIC_KEY = "isPublic";
exports.DEFAULT_PORT = 1118;
//# sourceMappingURL=index.js.map