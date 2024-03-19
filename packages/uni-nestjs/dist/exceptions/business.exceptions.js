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
exports.UniBusinessException = void 0;
const common_1 = require("@nestjs/common");
const main_1 = require("../main");
/**
 * 自定义业务异常
 */
class UniBusinessException extends common_1.HttpException {
    constructor(err) {
        // 处理公共错误
        if (typeof err === 'string') {
            err = {
                code: main_1.BUSINESS_ERROR_CODE.COMMON.code,
                msg: err
            };
        }
        super(err, main_1.BUSINESS_ERROR_CODE.COMMON.code);
    }
    /**
     * 抛出公共异常
     */
    static throwCommonError() {
        throw new UniBusinessException(main_1.BUSINESS_ERROR_CODE.COMMON);
    }
    /**
     * 无权限
     */
    static throwForbidden() {
        throw new UniBusinessException(main_1.BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN);
    }
    /**
     * 字段不合法
     * @param msg
     */
    static throwFieldsIncorrect(msg = '字段不合法') {
        throw new UniBusinessException({
            code: main_1.BUSINESS_ERROR_CODE.FIELD_INCORRECT.code,
            msg
        });
    }
    /**
     * 无效token或已过期
     */
    static throwInvalidToken() {
        throw new UniBusinessException(main_1.BUSINESS_ERROR_CODE.INVALID_TOKEN);
    }
}
exports.UniBusinessException = UniBusinessException;
//# sourceMappingURL=business.exceptions.js.map