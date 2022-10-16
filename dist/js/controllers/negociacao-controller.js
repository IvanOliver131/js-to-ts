import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulário();
    }
    criaNegociacao() {
        const exp = /-/g;
        if (this.inputData && this.inputQuantidade && this.inputValor) {
            const date = new Date(this.inputData.value.replace(exp, ","));
            const quantidade = Number(this.inputQuantidade.value);
            const valor = Number(this.inputValor.value);
            return new Negociacao(date, quantidade, valor);
        }
        throw new Error("Erro ao criar negociação!");
    }
    limparFormulário() {
        var _a;
        if (this.inputData && this.inputQuantidade && this.inputValor) {
            this.inputData.value = "";
            this.inputQuantidade.value = "";
            this.inputValor.value = "";
        }
        (_a = this.inputData) === null || _a === void 0 ? void 0 : _a.focus();
    }
}
