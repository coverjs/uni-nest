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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonResponseVo = exports.BaseDataVo = void 0;
const swagger_1 = require("@nestjs/swagger");
class BaseDataVo {
}
exports.BaseDataVo = BaseDataVo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id, 唯一标识' }),
    __metadata("design:type", Number)
], BaseDataVo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '创建时间', example: '2023-05-08 01:58:24' }),
    __metadata("design:type", String)
], BaseDataVo.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '更新时间', example: '2023-05-08 01:58:24' }),
    __metadata("design:type", String)
], BaseDataVo.prototype, "updatedAt", void 0);
// 公共返回类型
class CommonResponseVo {
}
exports.CommonResponseVo = CommonResponseVo;
__decorate([
    (0, swagger_1.ApiProperty)({ description: '响应状态码', default: 0 }),
    __metadata("design:type", Number)
], CommonResponseVo.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '响应信息', default: 'ok' }),
    __metadata("design:type", String)
], CommonResponseVo.prototype, "msg", void 0);
//# sourceMappingURL=common.vo.js.map