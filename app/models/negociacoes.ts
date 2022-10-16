import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): Array<Negociacao> {
    // Pegar cada item dessa lista e colocar dentro desta nova lista para criar imutabilidade
    return [...this.negociacoes];
  }
}
