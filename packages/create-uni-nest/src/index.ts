#!/usr/bin/env node
import prompts from "prompts";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const bootstrap = async () => {
  const result = await prompts({
    type: "text",
    name: "projectName",
    message: "项目名称",
    initial: "nestjs-app",
  });

  const targetPath = path.resolve(process.cwd(), result.projectName);
  const sourcePath = path.resolve(__dirname, "../template");

  fs.cpSync(sourcePath, targetPath, {
    recursive: true,
  });
  fs.renameSync(
    path.resolve(targetPath, "_gitignore"),
    path.resolve(targetPath, ".gitignore"),
  );

  console.log(`
  项目创建成功🥳:

  cd ${result.projectName}
  npm install
  npm run dev
  `);
};

bootstrap();
