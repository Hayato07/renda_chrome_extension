
let clickedEl = null;

document.addEventListener("contextmenu", function (event) {
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(rendaman);

function rendaman(request, sender, sendResponse) {
    if (!clickedEl) return false;
    if (request.action != "rendaman") return false;

    let renda_count, renda_interval, clickInterval;

    // 既存の連打処理があれば削除
    if (clickInterval) {
        clearInterval(clickInterval);
    }

    chrome.storage.local.get(['renda_count', 'renda_interval'], function (result) {
        renda_count = result.renda_count ? result.renda_count : 100;
        renda_interval = result.renda_interval ? result.renda_interval : 100;

        clickInterval = setInterval(function () {
            if (renda_count <= 0) {
                clearInterval(clickInterval);
                sendResponse({ message: "renda completed!!" });
                return;
            }

            clickedEl.click();
            renda_count--;
        }, renda_interval);
    });

    return true;
}