"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const negociacao_controller_js_1 = require("./controllers/negociacao-controller.js");
const controller = new negociacao_controller_js_1.NegociacaoController();
const form = document.querySelector(".form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
});
