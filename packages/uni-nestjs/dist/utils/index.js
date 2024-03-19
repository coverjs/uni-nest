"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPath = void 0;
const ip_1 = require("ip");
const printPath = (port) => {
    console.log();
    console.log("  接口地址:");
    console.log(`  http://localhost:${port}`);
    console.log(`  http://${(0, ip_1.address)()}:${port}`);
};
exports.printPath = printPath;
//# sourceMappingURL=index.js.map