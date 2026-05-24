import { getCache, setCache } from "../storage/storage.js";

export async function traduzir(texto, target = "pt") {

    const cacheKey = `${texto}_${target}`;

    // 🔍 1. Verifica cache
    const cached = await getCache(cacheKey);

    if (cached) {
        console.log("⚡ Cache usado");
        return cached;
    }

    // 🌐 2. Chama API
    const response = await fetch("https://translate.argosopentech.com/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            q: texto,
            source: "auto",
            target: target
        })
    });

    const data = await response.json();

    // 💾 3. Salva no cache
    await setCache(cacheKey, data.translatedText);

    return data.translatedText;
}