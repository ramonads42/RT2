import Calculo from "./calculo";

export default class Bhaskara extends Calculo {
  public calcular(...numeros: number[]): number[] {
    const numero1 = numeros[0];
    const numero2 = numeros[1];
    const numero3 = numeros[2];

    let delta = (numero2 * numero2) - (4 * numero1 * numero3);

    if (delta < 0) {
      return [];
    }

    let x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
    let x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);

    if (delta === 0) {
      return [x1];
    }

    return [x1, x2];
  }
}
  