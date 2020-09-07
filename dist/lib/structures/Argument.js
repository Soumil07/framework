"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Argument = void 0;
const Args_1 = require("../utils/Args");
const Result_1 = require("../utils/Result");
const BasePiece_1 = require("./base/BasePiece");
class Argument extends BasePiece_1.BasePiece {
    ok(value) {
        return Result_1.ok(value);
    }
    error(parameter, typeOrMessage, rawMessage) {
        return Result_1.err(Args_1.Args.error(this, parameter, typeOrMessage, rawMessage));
    }
}
exports.Argument = Argument;
//# sourceMappingURL=Argument.js.map