//UlfricParry
/*function sayLol(timestamp) {
    document.write("<input type='button' value='lol'>");
    
    
    //requestAnimationFrame(sayLol);
}*/

/*function addButton(){
    var inputElements = document.createElement("input");
    inputElements.setAttribute("type", "button");
    inputElements.setAttribute("Value", "New Button");  
    // buttonText = document.createTextNode("New Button");
    //inputElements.appendChild(buttonText);

    var parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElements);
    var newParagraph = document.createElement("p");
    var parText = document.createTextNode("New Paragraph");
    parent.appendChild(newParagraph);
}*/


function addButton(){
    console.log("Adding Start and Stop buttons");
    let addButton = document.getElementById("addButton");
    addButton.setAttribute("disabled","true");
    
    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id","startButton")
    inputElementStart.setAttribute("onclick", "startButton();");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id","stopButton")
    inputElementStop.setAttribute("onclick", "stopButton();");
    inputElementStop.setAttribute("disabled","true");


    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);



}

function startButton(){
    console.log("Pressed Start");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled","true");
 
    
    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");
    
    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "2s";
    
}

function stopButton(){
    console.log("Pressed Stop");

    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");
    
    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled", "true");
    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "0s";

}