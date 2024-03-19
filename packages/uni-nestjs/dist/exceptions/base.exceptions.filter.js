"use strict";
// Copyright 2024 hacxy
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniBaseExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
/*
 * 非 HTTP 标准的异常过滤器 (代码逻辑错误)
 */
let UniBaseExceptionsFilter = class UniBaseExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        // 打印错误信息
        console.log(exception);
        const exResponse = new common_1.ServiceUnavailableException().getResponse();
        if (typeof exResponse === 'string') {
            response.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).send({
                statusCode: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                timestamp: new Date().toISOString(),
                path: request.url,
                msg: new common_1.ServiceUnavailableException().getResponse()
            });
        }
        else {
            response.status(common_1.HttpStatus.SERVICE_UNAVAILABLE).send({
                statusCode: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                timestamp: new Date().toISOString(),
                path: request.url,
                ...new common_1.ServiceUnavailableException().getResponse()
            });
        }
    }
};
exports.UniBaseExceptionsFilter = UniBaseExceptionsFilter;
exports.UniBaseExceptionsFilter = UniBaseExceptionsFilter = __decorate([
    (0, common_1.Catch)(Error)
], UniBaseExceptionsFilter);
//# sourceMappingURL=base.exceptions.filter.js.map