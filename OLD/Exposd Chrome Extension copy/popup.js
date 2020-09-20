// chrome.browserAction.onClicked.addListener(buttonClicked);
//
// function buttonClicked(tab) {
//   let msg = {
//     txt: "hello"
//   }
//   document.getElementById("opinion").sendMessage(tab.id, msg);
// }
console = chrome.extension.getBackgroundPage().console;

var tabIds = [];
// var retrievedData = localStorage.getItem("paragraph");
// var paragraphs = JSON.parse(retrievedData);
//Sending ButtonClicked Event to content.js
document.querySelector('.opinionButton').addEventListener('click', function(){

  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    //sending onClicked Event to content.js
    var activeTab = tabs[0];
    //window.localStorage.clear();
    // paragraphs = [];
    //console.log("par array got yeeted and cleaned")
    chrome.tabs.sendMessage(activeTab.id, {command: "Opinion"});

    // if(tabIds.length < 2){
    //   tabIds.push(activeTab.id);
    // } else {
    //   tabIds.splice(0, 1)
    //   tabIds.push(activeTab.id);
    // }
    // tabIds.append(activeTab.id)
    // console.log("oldTabID: " + oldTabId);
    //receiving result from opinion.py script
    document.getElementById('opinionData').innerHTML = "New Number";
  });

  document.querySelector('.highLight').addEventListener('click', function(){

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      //sending onClicked Event to content.js
      var activeTab = tabs[0];
      //window.localStorage.clear();
      // paragraphs = [];
      //console.log("par array got yeeted and cleaned")
      chrome.tabs.sendMessage(activeTab.id, {command: "highLight"});
    });
});

    function makeHttpObject() {
      try {return new XMLHttpRequest();}
        catch (error) {}
      try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (error) {}
      try {return new ActiveXObject("Microsoft.XMLHTTP");}
        catch (error) {}

        throw new Error("Could not create HTTP request object.");
      }

//receiving par and title data from content.js
//console.log("POPUP.JS: {}".format(localStorage["paragraphs"]));
// for (elt of window.localStorage.getItem('paragraphs')){
  //console.log("POPUP.JS FILE: " + window.localStorage.getItem('paragraph'));//HTML Text of the paragraphs
//   console.log("Sentiment Analysis: {}".format(eel.get_sentiment(elt.innerHTML)));
//   elt.style['background-color'] = '#f5f542';
//   console.log("POPUP.HTML SCRIPT RANNN HEREERERE");
// }
// eel.get_sentiment(elt.innerHTML);

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

// since only one tab should be active and in the current window at once
// the return variable should only have one entry
// var activeTab = tabs[0];
// var activeTabId = activeTab.id;
// console.log("activeTabID: " + activeTabId);
// if ((activeTabID != tabIds[0])){
//   paragraphs = [];
//   console.log("cleared Paragraphs Arrays")
// }// or do whatever you need




retrievedData = localStorage.getItem("paragraph");
//console.log(retrievedData);
paragraphs = JSON.parse(retrievedData);
//console.log(paragraphs)
var data = {

}
var subjArray = [];

for(let i = 0; i < paragraphs.length; i++){
  data = {
    index: i,
    paragraph: paragraphs[i],
    lengthOfPar: paragraphs.length
  }
  fetch("http://127.0.0.1:5000/", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(data),
    cache: "no-cache",
    headers: new Headers({
      "content-type": "application/json"
    })
  })
  .then(function(response){
    window.localStorage.removeItem("paragraph")
    if(response.status != 200){
      console.log(`Response status was not 200: ${response.status}`);
      return ;
    }

    response.json().then(function(data){
      // window.localStorage.removeItem("paragraph")
      // subjArray = data
      // console.log(subjArray);
      // console.log(subjArray[1]);
      // //localStorage["subjArray"] = subjArray;
      // // console.log(JSON.parse(localStorage["subjArray"]))
      // //chrome.storage.local.set({subjArray:data})
      // chrome.runtime.sendMessage({
      //   subjArray: JSON.stringify(subjArray) // or whatever you want to send
      // });
      console.log(JSON.stringify(data))



document.getElementById(".highLight").addEventListener("click", function() {
chrome.tabs.sendMessage(activeTab.id, {command: "highLight"});
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            data: JSON.stringify(data)
        });
    });
});

})
})
}

// //console.log("POPUP: " + paragraphs);
// for(let i = 0; i < paragraphs.length; i++){
//   console.log(paragraphs[i] + eel.get_sentiment(paragraphs[i]));
// }

// jQuery.post('saveTheValues', $.param({'values': paragraphs}, true),
//     function(data)
//     {
//         console.log(paragraphs)
//     }, 'json');

// $.get(
//     url="/",
//     data={host:"Hi"},
//     success = function (data) {
//         alert('page content: ' + data);
//     }
// );


// var request = makeHttpObject();
// request.open("GET", "http://127.0.0.1:8080", true);
// request.send(null);
// request.onreadystatechange = function() {
//   if (request.readyState == 4)
//     document.getElementById('opinionData').innerHTML = request.responseText;
// };
});
