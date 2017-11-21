import {RequestResponse} from "request";
import * as requestPromiseNative from "request-promise-native";
import {RequestUriParams} from "./RequestUriParams";

export class RequestPromiseNativeWrapper {
  public async doExec(requestUriParams: RequestUriParams): Promise<RequestResponse> {
    return await requestPromiseNative(requestUriParams);
  }
}
