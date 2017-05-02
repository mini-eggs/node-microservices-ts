import GetDatabase from "./api/getDatabase";
import GuidestarIncrementLog from "./api/guidestarIncrementLog";
import GuidestarGetCount from "./api/guidestarGetCount";
import { RequestType, ResponseType, NextType, ServerType } from "./core/types";

export default function(server: ServerType) {
  server.get("/database/get/full", GetDatabase);

  server.get("/guidestar/increment/log", GuidestarIncrementLog);
  server.get("/guidestar/get/count", GuidestarGetCount);

  server.all("/", function(request: RequestType, response: ResponseType) {
    response.success("Welcome to the microservice.");
  });

  server.all("*", function(request: RequestType, response: ResponseType) {
    response.fail("No route found.");
  });
}
