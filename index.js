//array of clrs
const data = ["Blue","Red","Green","Gray","Maroon","Blueviolet","Chocolate","Cyan","Lavender","Olive","Springgreen","Violet","Tan","Snow","Silver","Sandybrown","Powderblue","Pink","Peachpuff","Palevioletred","Papayawhip","Navy"];

//select the document node 
const clr = document.getElementById("bg__color");
const btn = document.getElementById("bttn");
//const container = document.getElementsByClassName("container");


btn.addEventListener("click",changeClr);

function changeClr(){
    //change to that colorlet

    //generate random number to be displayed
    let randomNum = Math.floor(Math.random()*data.length);
    clr.innerHTML=data[randomNum]+"!";
    //clr.style.color=data[randomNum];
    document.body.style.backgroundColor = data[randomNum];
    clr.style.color=data[randomNum];
    console.log("Backgrpund color is: "+data[randomNum]);
}


