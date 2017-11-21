import {RequestResponse} from "request";
import {RequestPromiseNativeWrapper} from "./RequestPromiseNativeWrapper";

export async function handler(requestPromiseNativeWrapper: RequestPromiseNativeWrapper): Promise<RequestResponse> {
  console.log("1...");
  console.log("2...");
  console.log("3...");
  console.log("4...");
  console.log("5...");
  // const logicAppResponse: RequestResponse = TypeMoq.Mock.ofType<RequestResponse>().object;
  return await requestPromiseNativeWrapper.doExec({
    method: "POST",
    uri: "https://aaa.bbb",
    body: {},
    resolveWithFullResponse: true,
    simple: false,
    json: true,
  });
}

