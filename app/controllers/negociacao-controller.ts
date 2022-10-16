import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement | null;
  private inputQuantidade: HTMLInputElement | null;
  private inputValor: HTMLInputElement | null;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
  }

  criaNegociacao(): Negociacao | string {
    const exp = /-/g;
    if (this.inputData && this.inputQuantidade && this.inputValor) {
      const date = new Date(this.inputData.value.replace(exp, ","));
      const quantidade = Number(this.inputQuantidade);
      const valor = Number(this.inputValor);

      return new Negociacao(date, quantidade, valor);
    }

    throw new Error("Erro ao criar negociação!");
  }
}
