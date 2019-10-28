$("#toggleButton").change(function() {
    chrome.tabs.sendMessage("oppai", function (response){
        console.log("受け取ったデータ：", response)
    })
  });