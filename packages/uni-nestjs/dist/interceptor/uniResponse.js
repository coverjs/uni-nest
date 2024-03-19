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
exports.UniResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
// 包装结果，将请求成功的返回结果格式统一包装起来，放入 data
let UniResponseInterceptor = class UniResponseInterceptor {
    intercept(context, next) {
        const ResponseObj = context.switchToHttp().getResponse();
        ResponseObj.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
        return next.handle().pipe((0, operators_1.map)((data) => {
            return {
                code: 0,
                data,
                msg: 'ok'
            };
        }));
    }
};
exports.UniResponseInterceptor = UniResponseInterceptor;
exports.UniResponseInterceptor = UniResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], UniResponseInterceptor);
//# sourceMappingURL=uniResponse.js.map