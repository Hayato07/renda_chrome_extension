chrome.runtime.onInstalled.addListener(function () {
    // メニュー追加
    chrome.contextMenus.create(
        {
            id: "rendaman",
            title: "連打する",
            contexts: ["all"]
        }
    )

    // メニュークリック時
    chrome.contextMenus.onClicked.addListener(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "rendaman" });
        });
    });
})