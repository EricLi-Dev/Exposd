// chrome.browserAction.onClicked.addListener(buttonClicked);
//
// function buttonClicked(tab) {
//   let msg = {
//     txt: "hello"
//   }
//   document.getElementById("opinion").sendMessage(tab.id, msg);
// }

document.querySelector('.opinionButton').addEventListener('click', function(){

  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    //sending onClicked Event to content.js
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {command: "Opinion"});

    //receiving result from opinion.py script
    document.getElementById('opinionData').innerHTML = "New Number";
  });
})
