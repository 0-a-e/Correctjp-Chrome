console.log("background-works");
window.addEventListener("load", main, false);
function main() {
    var queryInfo = {
        active: true,
        windowId: chrome.windows.WINDOW_ID_CURRENT
    };

    // タブの情報を取得する
    chrome.tabs.query(queryInfo, function (result) {
        var currentTab = result.shift();
        //var message = send("貴様");
        var message = {};
        chrome.tabs.sendMessage(currentTab.id, message, function () {
        });
    });
}
function send(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://shenzhen.starfree.jp/api.php?text="+data, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            code = xhr.responseText;
            console.log(code);
        } else {
          console.log(xhr.statusText);
        }
      } else {
          console.log("怪しい日本語エラー");
       }
    };
    xhr.send();
} 