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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniHttpCode = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
/**
 *
 * @param code 定义状态码
 * @returns
 */
const UniHttpCode = (code) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(constants_1.BUSINESS_HTTP_CODE_KEY, code), (0, common_1.HttpCode)(code));
};
exports.UniHttpCode = UniHttpCode;
//# sourceMappingURL=httpCode.js.map