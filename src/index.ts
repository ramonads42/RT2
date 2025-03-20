import * as readline from "readline";
import Calculo from "./calculo";
import Divisao from "./divisao";
import Soma from "./soma";
import Subtracao from "./subtracao";
import Potenciacao from "./potenciacao";
import Radiciacao from "./radiciacao";
import Bhaskara from "./bhaskara";

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  leitor.question(`Quais são seus numeros e a operação desejada?
    Exemplo: Numero Numero Operação
    Operações: Somar, Subtracao, Divisao, Potenciacao, Radiciacão, Bhaskara\n`, (valor) => {
      let instrucoes = valor.split(" ");
      let numero1 = Number(instrucoes[0]);
      let numero2 = Number(instrucoes[1]);
      let operacao = instrucoes[2].trim().toLowerCase();

      if (operacao === 'bhaskara') {
        if (instrucoes.length < 4) {
          console.log('Para a operação Bhaskara, você precisa fornecer 3 números (a, b, c).');
          return leitor.close();
        }

        numero1 = Number(instrucoes[0]);
        numero2 = Number(instrucoes[1]);
        let numero3 = Number(instrucoes[2]);
    
        let calculo: Calculo = new Bhaskara();
        let resultado = calculo.calcular(numero1, numero2, numero3);
        console.log(`O resultado da operação de Bhaskara é: ${Array.isArray(resultado) && resultado.length > 0 ? resultado : 'Não possui raízes reais'}\n`);
      } else {

        switch (operacao) {
          case 'somar':
            let calculoSoma = new Soma();
            console.log(`O resultado da operação é: ${calculoSoma.calcular(numero1, numero2)}\n`);
            break;
          case 'subtracao':
            let calculoSubtracao = new Subtracao();
            console.log(`O resultado da operação é: ${calculoSubtracao.calcular(numero1, numero2)}\n`);
            break;
          case 'divisao':
            let calculoDivisao = new Divisao();
            console.log(`O resultado da operação é: ${calculoDivisao.calcular(numero1, numero2)}\n`);
            break;
          case 'potenciacao':
            let calculoPotenciacao = new Potenciacao();
            console.log(`O resultado da operação é: ${calculoPotenciacao.calcular(numero1, numero2)}\n`);
            break;
          case 'radiciacao':
            let calculoRadiciacao = new Radiciacao();
            console.log(`O resultado da operação é: ${calculoRadiciacao.calcular(numero1, numero2)}\n`);
            break;
          default:
            console.log("Operação não reconhecida");
            break;
        }
      }
    
      leitor.close();
    });
}

iniciar();
