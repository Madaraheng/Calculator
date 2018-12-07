
// select all of the input that tpye = button
// select the textView field
const buttons = document.querySelectorAll("input[type='button']");

const textField = document.querySelector(".fieldText");
// add the event onlick to the all the buttons
buttons.forEach(button => button.addEventListener("click",getTheValue))
function getTheValue(e){
   let value = this.value;
   // put the value to the screen;
   if(value !== "d" && value !== "c" & value !== "="){
      textField.value = textField.value+value;
   }
   if(value == "="){
      textField.value = eval(textField.value);
   }
   if(value == "d"){
      let length = textField.value;
      textField.value = length.substring(0,length.length - 1);
   }
   if(value == "c"){
      textField.value = "";
   }
}






