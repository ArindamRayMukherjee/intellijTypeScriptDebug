/// <reference types="request" />
import { RequestResponse } from "request";
import { RequestPromiseNativeWrapper } from "./RequestPromiseNativeWrapper";
export declare function handler(requestPromiseNativeWrapper: RequestPromiseNativeWrapper): Promise<RequestResponse>;
