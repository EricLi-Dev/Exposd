chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  // console.log(tabs[0].url);
  // console.log(tabs[0].title);
});
// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.executeScript(null, {
//       file: clearArrayScript()
//   });
// });
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.runtime.sendMessage({msg: 'left'});
});

chrome.tabs.onCreated.addListener(function(tab) {
   chrome.runtime.sendMessage({msg: 'left'});
});

function clearArrayScript(){
  var retrievedData = localStorage.getItem("paragraph");
  var paragraphs = JSON.parse(retrievedData);
  console.log(paragraphs)
  localStorage["paragraph"] = [];
  console.log(paragraphs)
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
      window.localStorage.clear();
       localStorage["paragraph"] = request.paragraph;
      // console.log(localStorage["paragraph"]);
    }
);

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.data !== undefined) {
        console.log(JSON.parse(msg.data));
    }
});
