import "@floodteam/components";
import { getSdk } from "@floodteam/backend/dist";

export default () => {
  // On Load
  (window as any).FloodTeam = {
    init: async (
      options: {
        host?: string;
        token?: string;
        onError?: string;
        functionsHost?: string;
      } = {}
    ) => {
      const libConfig = {
        host: options.host ? options.host : "https://floodteam-app.appspot.com",
        token: options.token ? options.token : null,
        onError: (err) => {
          console.warn(err.message.split(":")[0]);
          console.log(err.response.errors);
        },
        functionsHost: options.functionsHost
          ? options.functionsHost
          : "https://us-central1-floodteam-app.cloudfunctions.net",
      };
      return await (window as any).FireEnjin.init(getSdk, libConfig);
    },
  };
};
