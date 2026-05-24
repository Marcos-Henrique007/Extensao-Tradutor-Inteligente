chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "translate",
        title: "Traduzir texto selecionado",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translate") {
        chrome.tabs.sendMessage(tab.id, {
            type: "TRANSLATE",
            text: info.selectionText
        });
    }
});