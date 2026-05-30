console.log("Tradutor carregado!");

document.addEventListener("mouseup", () => {

    setTimeout(() => {

        const textoSelecionado =
            window.getSelection().toString().trim();

        if (!textoSelecionado) {
            return;
        }

        removerBotao();

        const botao =
            document.createElement("button");

        botao.id = "translator-btn";
        botao.textContent = "Traduzir agora";

        botao.style.position = "fixed";
        botao.style.top = "20px";
        botao.style.right = "20px";

        document.body.appendChild(botao);

        botao.addEventListener("click", () => {
            traduzir(textoSelecionado);
        });

    }, 100);

});

function removerBotao() {
    const btn =
        document.getElementById("translator-btn");

    if (btn) btn.remove();
}

async function traduzir(texto) {

    try {

        const response = await fetch(
            "https://api.mymemory.translated.net/get?q=" +
            encodeURIComponent(texto) +
            "&langpair=en|pt"
        );

        const data = await response.json();

        alert(data.responseData.translatedText);

    } catch (erro) {

        console.error(erro);

        alert("Erro ao traduzir.");

    }

}