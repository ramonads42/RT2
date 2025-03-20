"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var divisao_1 = __importDefault(require("./divisao"));
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var potenciacao_1 = __importDefault(require("./potenciacao"));
var radiciacao_1 = __importDefault(require("./radiciacao"));
var bhaskara_1 = __importDefault(require("./bhaskara"));
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais s\u00E3o seus numeros e a opera\u00E7\u00E3o desejada?\n    Exemplo: Numero Numero Opera\u00E7\u00E3o\n    Opera\u00E7\u00F5es: Somar, Subtracao, Divisao, Potenciacao, Radiciac\u00E3o, Bhaskara\n", function (valor) {
        var instrucoes = valor.split(" ");
        var numero1 = Number(instrucoes[0]);
        var numero2 = Number(instrucoes[1]);
        var operacao = instrucoes[2].trim().toLowerCase();
        if (operacao === 'bhaskara') {
            if (instrucoes.length < 4) {
                console.log('Para a operação Bhaskara, você precisa fornecer 3 números (a, b, c).');
                return leitor.close();
            }
            numero1 = Number(instrucoes[0]);
            numero2 = Number(instrucoes[1]);
            var numero3 = Number(instrucoes[2]);
            var calculo = new bhaskara_1.default();
            var resultado = calculo.calcular(numero1, numero2, numero3);
            console.log("O resultado da opera\u00E7\u00E3o de Bhaskara \u00E9: ".concat(Array.isArray(resultado) && resultado.length > 0 ? resultado : 'Não possui raízes reais', "\n"));
        }
        else {
            switch (operacao) {
                case 'somar':
                    var calculoSoma = new soma_1.default();
                    console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculoSoma.calcular(numero1, numero2), "\n"));
                    break;
                case 'subtracao':
                    var calculoSubtracao = new subtracao_1.default();
                    console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculoSubtracao.calcular(numero1, numero2), "\n"));
                    break;
                case 'divisao':
                    var calculoDivisao = new divisao_1.default();
                    console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculoDivisao.calcular(numero1, numero2), "\n"));
                    break;
                case 'potenciacao':
                    var calculoPotenciacao = new potenciacao_1.default();
                    console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculoPotenciacao.calcular(numero1, numero2), "\n"));
                    break;
                case 'radiciacao':
                    var calculoRadiciacao = new radiciacao_1.default();
                    console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculoRadiciacao.calcular(numero1, numero2), "\n"));
                    break;
                default:
                    console.log("Operação não reconhecida");
                    break;
            }
        }
        leitor.close();
    });
};
iniciar();
