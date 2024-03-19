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
exports.UniHttpExeptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
const business_exceptions_1 = require("./business.exceptions");
/**
 * http异常过滤器
 */
let UniHttpExeptionsFilter = class UniHttpExeptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const respones = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        const exResponse = exception.getResponse();
        const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
        // 处理自定义业务异常
        if (exception instanceof business_exceptions_1.UniBusinessException) {
            const error = exception.getResponse();
            console.log(error);
            respones.status(error.statusCode || respones.statusCode).send({
                code: error.code,
                msg: error.msg
            });
            return;
        }
        let responseJson = {};
        // 系统异常
        if (typeof exResponse === 'string') {
            responseJson = {
                code: status,
                timestamp: time,
                path: request.url,
                msg: exResponse
            };
        }
        else {
            responseJson = {
                code: status,
                timestamp: time,
                path: request.url,
                msg: exResponse.message
            };
        }
        respones.status(common_1.HttpStatus[status] ? status : 500).json(responseJson);
    }
};
exports.UniHttpExeptionsFilter = UniHttpExeptionsFilter;
exports.UniHttpExeptionsFilter = UniHttpExeptionsFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], UniHttpExeptionsFilter);
//# sourceMappingURL=http.exceptions.filter.js.map