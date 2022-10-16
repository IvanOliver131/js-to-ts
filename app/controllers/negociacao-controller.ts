import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement | null;
  private inputQuantidade: HTMLInputElement | null;
  private inputValor: HTMLInputElement | null;
  private negociacoes: Negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista());
    this.limparFormulário();
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;
    if (this.inputData && this.inputQuantidade && this.inputValor) {
      const date = new Date(this.inputData.value.replace(exp, ","));
      const quantidade = Number(this.inputQuantidade.value);
      const valor = Number(this.inputValor.value);

      return new Negociacao(date, quantidade, valor);
    }

    throw new Error("Erro ao criar negociação!");
  }

  limparFormulário(): void {
    if (this.inputData && this.inputQuantidade && this.inputValor) {
      this.inputData.value = "";
      this.inputQuantidade.value = "";
      this.inputValor.value = "";
    }
    this.inputData?.focus();
  }
}
