import {RequestResponse} from "request";
import * as TypeMoq from "typemoq";
import {handler} from "./httpRequestHandler";
import {RequestPromiseNativeWrapper} from "./RequestPromiseNativeWrapper";

test("happy flow POST", async () => {
  const mockRequestPromiseNativeWrapper: TypeMoq.IMock<RequestPromiseNativeWrapper>
    = TypeMoq.Mock.ofType<RequestPromiseNativeWrapper>();
  const mockRequestResponse: TypeMoq.IMock<RequestResponse> = TypeMoq.Mock.ofType<RequestResponse>();
  mockRequestResponse
    .setup((x) => x.statusCode)
    .returns(() => 200);
  mockRequestResponse
    .setup((x) => x.body)
    .returns(() => {
      return {
        account: "account",
      };
    });
  mockRequestPromiseNativeWrapper
    .setup((x) => x.doExec(TypeMoq.It.isAny()))
    .returns(() => Promise.resolve(mockRequestResponse.object));
  const response = await handler(mockRequestPromiseNativeWrapper.object);
  expect(response.statusCode).toBe(200);
  expect(response.body.account).toBe( "account");
});
