console.log("Chrome Extension Es Gucci");

let title = document.getElementsByTagName('h1');

for (elt of title){
  console.log(elt.innerHTML);//--> HTML Text of the title
  elt.style['background-color'] = '#FF00FF';
}



// chrome.runtime.onMessage.addListener(gotMessage);
//
// function gotMessage(message, sender, sendResponse) {
//   if(message.txt === "hello"){
//     let paragraphs = document.getElementsByTagName('p');
//
//     for (elt of paragraphs){
//       console.log(elt.innerHTML);//--> HTML Text of the paragraphs
//       elt.style['background-color'] = '#f5f542';
//     }
//   }
// }

let paragraphs = document.getElementsByTagName('p');

chrome.runtime.onMessage.addListener((msg, sender, response) => {

  if(msg.command == "Opinion"){
     var par = [];
     for (elt of paragraphs){

       par.push(elt.textContent);
       //console.log("Par Pushed" + par);
       //console.log(elt.innerHTML);
       //elt.style['background-color'] = '#f5f542';
     };
    //localStorage["paragraph"] = JSON.stringify(par)
     chrome.runtime.sendMessage({
       paragraph: JSON.stringify(par)// or whatever you want to send
     });// chrome.storage.local.set({paragraph:JSON.stringify(par)})

}

});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command == "HighLight"{
      
    })
}



// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//   if(msg.command == "highLight"){
//     console.log("triggered")
//     var retrievedData = localStorage["subjArray"];
//     console.log(retrievedData);
//     var subjective = JSON.parse(retrievedData);
//     // console.log("From the content JS page, receiving DATA.");
//     console.log(subjective);
//   }
// });



// for (elt of paragraphs){
//   for (let i = 0; i < subjective.length; i++){
//     console.log(subjective);
//     console.log(elt.innerHTML);
//     if elt.innerHTML == subjective[i]:
//       elt.style['background-color'] = '#f5f542';
//   }
//
// }
