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
exports.registerSwaggerModule = void 0;
const swagger_1 = require("@nestjs/swagger");
const schemas_1 = require("../schemas");
const registerSwaggerModule = (app, swaggerOptions) => {
    if (!swaggerOptions)
        return;
    const { title, description, contact = [], version, license = [], swaggerPathPrefix = "/docs", } = swaggerOptions;
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle(title)
        .setDescription(description)
        .setContact(...contact)
        .setVersion(version)
        .setLicense(...license)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        // 项目内未使用，但是要被swagger模块使用的类，需要在此处进行声明
        // (公共的放这里，控制器中使用的可以在 @ApiExtraModels() 装饰器中定义)
        extraModels: [schemas_1.CommonResponseVo],
    });
    swagger_1.SwaggerModule.setup(swaggerPathPrefix, app, document);
};
exports.registerSwaggerModule = registerSwaggerModule;
//# sourceMappingURL=registerSwaggerModule.js.map