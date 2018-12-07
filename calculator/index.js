// select all the button that have class .show
//const buttons = document.querySelectorAll(".show");
// select the text view 
//let textView = document.querySelector(".textview");
// select the eqaul sign
//const equal = document.querySelector("input[value='=']");
// selec the del sign and the clear 
//const del = document.querySelector("input[value='d']");
//const clear = document.querySelector("input[value='c']")


// buttons.forEach(button => button.addEventListener("click",getTheValue));
/*
function getTheValue(e){
   // change the value of the textView
   // show the value to the screen;
   textView.value = textView.value + this.value;
  ;
}
// operator
equal.addEventListener("click",function (){
   if(textView.value){
      textView.value = eval(textView.value); 
   }
});
// end operator
// clear the all the value
clear.addEventListener("click",function(){
   textView.value  = "";
});
// end clear

// delete the value
del.addEventListener("click",function(){
   let sub = textView.value;
   textView.value = sub.substring(0,sub.length - 1);
});
*/




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






