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
function handler(requestPromiseNativeWrapper) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("1...");
        console.log("2...");
        console.log("3...");
        console.log("4...");
        console.log("5...");
        // const logicAppResponse: RequestResponse = TypeMoq.Mock.ofType<RequestResponse>().object;
        return yield requestPromiseNativeWrapper.doExec({
            method: "POST",
            uri: "https://aaa.bbb",
            body: {},
            resolveWithFullResponse: true,
            simple: false,
            json: true,
        });
    });
}
exports.handler = handler;

//# sourceMappingURL=httpRequestHandler.js.map
