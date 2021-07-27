let screen = document.getElementById("screen");

let buttons = document.querySelectorAll('button');

let screenValue = "";

for(items of buttons){
    items.addEventListener('click',function update(e){
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == "X") {
            buttonText = "*";
             screenValue += buttonText ;
             screen.value = screenValue;
        }
         else if(buttonText == "C") {
                    screenValue = "";
                    screen.value = screenValue;

        } 
        else if(buttonText == "=") {
           
            screen.value = eval(screenValue);
        } 
        else if(buttonText == "Del") {
           
            screen.value = screen.value.slice(0,-1);
            screenValue = screen.value;
        } 
        else{
            screenValue += buttonText ;
            screen.value = screenValue;
        }
    });
}


