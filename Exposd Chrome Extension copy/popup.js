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
    function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

var request = makeHttpObject();
request.open("GET", "http://127.0.0.1:8080", true);
request.send(null);
request.onreadystatechange = function() {
  if (request.readyState == 4)
    document.getElementById('opinionData').innerHTML = request.responseText;
};
  });
})
