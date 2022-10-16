export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // Pegar cada item dessa lista e colocar dentro desta nova lista para criar imutabilidade
        return [...this.negociacoes];
    }
}
