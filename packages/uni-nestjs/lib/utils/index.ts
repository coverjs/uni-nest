import { address } from "ip";

export const printPath = (port: number) => {
  console.log();
  console.log("  接口地址:");
  console.log(`  http://localhost:${port}`);
  console.log(`  http://${address()}:${port}`);
};
