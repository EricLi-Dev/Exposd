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

chrome.runtime.onMessage.addListener((msg, sender, response) => {

  if(msg.command == "Opinion"){
      let paragraphs = document.getElementsByTagName('p');
        for (elt of paragraphs){
          console.log(elt.innerHTML);//--> HTML Text of the paragraphs
          elt.style['background-color'] = '#f5f542';
        }
  }
  return true;
});
