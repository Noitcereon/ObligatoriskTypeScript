// document.getElementById("nameSubmit").addEventListener("click", function sayHello() 
// {
//     let name: string = (document.getElementById("nameInput") as HTMLInputElement).value;

//     console.log(name);
//     document.querySelector("#helloMessage").innerHTML = `Hello ${name}`;
// });

// enum TextManipulation{
//     UpperCase,
//     LowerCase,
//     Reverse,
//     Scramble
// }

document.getElementById("textSubmit").addEventListener("click", function manipulateString(){
    let textToManipulate : string = (document.getElementById("textInput") as HTMLInputElement).value;
    let manipulationOptionStr = (document.getElementById("textManipulationOption") as HTMLSelectElement).value;
    let outputElement = document.getElementById("manipulatedText");
    const option = manipulationOptionStr;
   
    switch(option){
        case "UpperCase":
            console.log("upper");
            outputElement.innerText = textToManipulate.toUpperCase();
            break;
        case "LowerCase":
            console.log("lower");
            outputElement.innerText = textToManipulate.toLowerCase();
            break;
        case "Reverse":
            console.log("reverse");
            outputElement.innerText = "";
            for(let i = textToManipulate.length; i >= 0; i--)
            {
                outputElement.innerText += textToManipulate.substr(i, 1);
            }
            break;
        case "Scramble":
            console.log("scramble");
            outputElement.innerText = "";
            for(let i = textToManipulate.length; i >= 0; i--)
            {
                outputElement.innerText += textToManipulate.substr(Math.floor(Math.random() * i), 1);
            }
            break;
        default:
            console.log(`Option not valid: ${option}`);
            break;
    }
})