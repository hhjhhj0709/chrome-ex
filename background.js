let color = "#ffa8c8"

chrome_runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color});
    console.log('Default background color st to %cgreen','color:${color}');
});