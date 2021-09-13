import { Config } from "@stencil/core";
import nodePolyfills from "rollup-plugin-node-polyfills";
import typescript from "rollup-plugin-typescript";

import { namespace } from "./package.json";

export const config: Config = {
  namespace,
  globalStyle: "src/css/global.css",
  globalScript: "src/global.ts",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "www",
      baseUrl: "https://ftms-legacy.web.app",
      serviceWorker: {
        swSrc: "src/sw.js",
        globPatterns: ["**/*.{js,css,json,html,ico,png}"],
      },
    },
  ],
  rollupPlugins: {
    before: [typescript()],
    after: [nodePolyfills()],
  },
};
