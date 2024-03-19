"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const core_1 = require("@nestjs/core");
const registerSwaggerModule_1 = require("./swagger/registerSwaggerModule");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const module_1 = require("./module");
__exportStar(require("./constants"), exports);
__exportStar(require("./decorators"), exports);
__exportStar(require("./exceptions"), exports);
__exportStar(require("./guard"), exports);
__exportStar(require("./interceptor"), exports);
__exportStar(require("./swagger"), exports);
__exportStar(require("./module"), exports);
const bootstrap = async (AppModule, options = {}) => {
    const { swaggerOptions, appOptions } = options;
    const UniAppModule = (0, module_1.handleUniModule)(AppModule, options);
    const app = await core_1.NestFactory.create(UniAppModule, appOptions);
    // app listen before
    options.beforeAppListen?.(app);
    // 注册swagger
    (0, registerSwaggerModule_1.registerSwaggerModule)(app, swaggerOptions);
    const port = options.appOptions?.port || Number(process.env.PORT) || constants_1.DEFAULT_PORT;
    await app.listen(port);
    (0, utils_1.printPath)(port);
};
exports.bootstrap = bootstrap;
//# sourceMappingURL=main.js.map