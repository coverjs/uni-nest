import { defineBuildConfig } from "unbuild";

const enableOut = process.argv.includes("--out");

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,
  // Generates .d.ts declaration file
  declaration: false,
  sourcemap: enableOut,
  // Change outDir, default is 'dist'
  outDir: enableOut ? "out" : "dist",
  rollup: {
    inlineDependencies: true,
    resolve: {
      exportConditions: ["node"], // fix: chalk ReferenceError: navigator is not defined. see: https://github.com/chalk/chalk/issues/557
    },
    esbuild: {
      target: "node18",
      minify: true,
    },
  },

  alias: {
    // we can always use non-transpiled code since we support node 18+
    // prompts: "prompts/lib/index.js",
  },
});
