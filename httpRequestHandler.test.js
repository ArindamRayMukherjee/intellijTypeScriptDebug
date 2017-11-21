"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeMoq = require("typemoq");
const httpRequestHandler_1 = require("./httpRequestHandler");
test("happy flow POST", () => __awaiter(this, void 0, void 0, function* () {
    const mockRequestPromiseNativeWrapper = TypeMoq.Mock.ofType();
    const mockRequestResponse = TypeMoq.Mock.ofType();
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
    const response = yield httpRequestHandler_1.handler(mockRequestPromiseNativeWrapper.object);
    expect(response.statusCode).toBe(200);
    expect(response.body.account).toBe("account");
}));

//# sourceMappingURL=httpRequestHandler.test.js.map
