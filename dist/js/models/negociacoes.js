export class Negociacoes {
    constructor() {
        // Array<Negociacao> ===  Negociacao[]
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao> === readonly Negociacao[]
    lista() {
        // Pegar cada item dessa lista e colocar dentro desta nova lista para criar imutabilidade - com Array<Negociacao>
        // return [...this.negociacoes];
        // OU
        // utilizamos ReadonlyArray
        return this.negociacoes;
    }
}
