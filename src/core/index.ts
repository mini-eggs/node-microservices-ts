import * as Express from "express";
import Middlewares from "./middlewares";

const server = Express();

Middlewares.forEach((middleware: any) => {
  server.use(middleware);
});

export default server;
