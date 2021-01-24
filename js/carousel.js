var phoneIframe = document.querySelector("#screenIframe");
var screenIframe = document.querySelector("#phoneIframe");
//variables
var templates = [
  "https://mecatronz.netlify.app/",
  "https://webee-official.netlify.app/",
  " ",
  "https://minders-snake.netlify.app/"
];
console.log(templates);
function chooseTemplate(temp){
  console.log(temp);
  screenIframe.src = temp;
  phoneIframe.src = temp;
}
