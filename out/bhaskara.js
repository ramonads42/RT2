"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_1 = __importDefault(require("./calculo"));
var Bhaskara = /** @class */ (function (_super) {
    __extends(Bhaskara, _super);
    function Bhaskara() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bhaskara.prototype.calcular = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        var numero1 = numeros[0];
        var numero2 = numeros[1];
        var numero3 = numeros[2];
        var delta = (numero2 * numero2) - (4 * numero1 * numero3);
        if (delta < 0) {
            return [];
        }
        var x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
        var x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);
        if (delta === 0) {
            return [x1];
        }
        return [x1, x2];
    };
    return Bhaskara;
}(calculo_1.default));
exports.default = Bhaskara;
