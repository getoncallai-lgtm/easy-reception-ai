import express, { type Express } from "express";
import cors from "cors";
import type { Options } from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http uses `export =` (CommonJS) — cast to callable to work across all TS configs
// eslint-disable-next-line @typescript-eslint/no-require-imports
const pinoHttp = require("pino-http") as (opts: Options) => express.RequestHandler;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: Record<string, unknown>) {
        return {
          id: req["id"],
          method: req["method"],
          url: typeof req["url"] === "string" ? req["url"].split("?")[0] : req["url"],
        };
      },
      res(res: Record<string, unknown>) {
        return {
          statusCode: res["statusCode"],
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
