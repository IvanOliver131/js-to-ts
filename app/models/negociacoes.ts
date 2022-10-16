import { Negociacao } from "./negociacao";

export class Negociacoes {
  // Array<Negociacao> ===  Negociacao[]
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray<Negociacao> === readonly Negociacao[]
  lista(): ReadonlyArray<Negociacao> {
    // Pegar cada item dessa lista e colocar dentro desta nova lista para criar imutabilidade - com Array<Negociacao>
    // return [...this.negociacoes];
    // OU
    // utilizamos ReadonlyArray
    return this.negociacoes;
  }
}
