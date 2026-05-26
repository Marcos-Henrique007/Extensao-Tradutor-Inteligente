// proteção total contra undefined
if (chrome.contextMenus) {

    chrome.runtime.onInstalled.addListener(() => {
        chrome.contextMenus.create({
            id: "translate",
            title: "Traduzir texto selecionado",
            contexts: ["selection"]
        });
    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        if (info.menuItemId === "translate") {

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["src/content/content.js"]
            }, () => {

                chrome.tabs.sendMessage(tab.id, {
                    type: "TRANSLATE",
                    text: info.selectionText
                });

            });
        }
    });

} else {
    console.error("contextMenus NÃO disponível");
}