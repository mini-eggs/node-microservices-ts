export interface RequestType {}

export interface ResponseType {
  success: Function,
  fail: Function,
  json: Function
}

export interface ServerType {
  all: Function,
  get: Function,
  listen: Function
}

export type NextType = Function;

export default {};
