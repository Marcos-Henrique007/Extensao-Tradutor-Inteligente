import { traduzir } from "../api/translate.js";

document.getElementById("btn").addEventListener("click", async () => {
    const texto = document.getElementById("text").value;
    const lang = document.getElementById("lang").value;

    const result = await traduzir(texto, lang);

    document.getElementById("result").innerText = result;
});