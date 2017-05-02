import { RequestType, ResponseType, NextType } from "../core/types";

function success(request: RequestType, response: ResponseType, next: NextType) {
  response.success = function(data: string | Object) {
    response.json({
      status: true,
      data: data
    });
  };
  next();
}

function fail(request: RequestType, response: ResponseType, next: NextType) {
  response.fail = function(data: string | Object) {
    response.json({
      status: false,
      data: data
    });
  };
  next();
}

export default [success, fail];
