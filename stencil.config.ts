import { Config } from "@stencil/core";
import typescript from "rollup-plugin-typescript";

import { namespace } from "./package.json";

export const config: Config = {
  namespace,
  globalStyle: "src/css/global.css",
  globalScript: "src/global.ts",
  outputTargets: [
    {
      type: "dist",
    },
  ],
  rollupPlugins: {
    before: [typescript()],
  },
};
