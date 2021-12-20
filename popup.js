window.onload = function () {
    let count = document.querySelector('#renda_count');
    let interval = document.querySelector('#renda_interval');
    chrome.storage.local.get(['renda_count', 'renda_interval'], function (result) {
        count.value = result.renda_count ? result.renda_count : 100;
        interval.value = result.renda_interval ? result.renda_interval : 100;
    });
}

const clickEvent = () => {
    const count = document.querySelector('#renda_count').value ? document.querySelector('#renda_count').value : 100;
    chrome.storage.local.set({ renda_count: count });

    const interval = document.querySelector('#renda_interval').value ? document.querySelector('#renda_interval').value : 100;//ms
    chrome.storage.local.set({ renda_interval: interval });
}

document.querySelector("#renda_set").addEventListener('click', clickEvent)