chrome.runtime.onMessage.addListener(async (msg) => {
    if (msg.type === "TRANSLATE") {
        try {
            const response = await fetch("https://translate.argosopentech.com/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    q: msg.text,
                    source: "auto",
                    target: "pt"
                })
            });

            const data = await response.json();

            alert("Tradução: " + data.translatedText);

        } catch (error) {
            console.error(error);
            alert("Erro ao traduzir");
        }
    }
});