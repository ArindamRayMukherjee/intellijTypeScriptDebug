/// <reference types="request" />
import { RequestResponse } from "request";
import { RequestUriParams } from "./RequestUriParams";
export declare class RequestPromiseNativeWrapper {
    doExec(requestUriParams: RequestUriParams): Promise<RequestResponse>;
}
