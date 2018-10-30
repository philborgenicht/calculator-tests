document.addEventListener("DOMContentLoaded", function(){



//declaring display as a document object
let display=document.getElementById("screen")
if(display.innerText>=10){
	display.innerText="error"
}

//declaring +,-,%,/ as mathematical operators
let operators=document.getElementsByClassName("operator")

//decalaring 0,1,2,3,4,5,6,7,8,9 as numbers
let numbers=document.getElementsByClassName("number")

//declaring = as a solution operator
let solve=document.getElementById("equals")


//declaring C as clear
let clear=document.getElementById("clear")


//adding event listener and function to modify display when clear is clicked
clear.addEventListener("click", function(){
  display.innerText=""
})

//adding event listener and function to modify display when operators are clicked
for(let i=0; i<operators.length; i++){
    operators[i].addEventListener("click", function(){
      if(display.innerText.includes("*")||display.innerText.includes("/")||display.innerText.includes("+")||display.innerText.includes("-")){
        display.innerText="one operation please"
      }
      else{
    display.innerText+=operators[i].innerText
  }
  })
}



//adding event listener and function to modify display when numbers are clicked
for (let j=0; j<numbers.length; j++){
  numbers[j].addEventListener("click", function(){
    display.innerText+=numbers[j].innerText
  })
}




solve.addEventListener("click", function(){
  if(display.innerText[0]===("*")||display.innerText[0]===("/")||display.innerText[0]===("-")||display.innerText[0]===("+")||display.innerText[0]===(0)){
    display.innerText="please begin with #"
  }
  else if(display.innerText[display.innerText.length-1]===("*")||display.innerText[display.innerText.length-1]===("/")||display.innerText[display.innerText.length-1]===("-")||display.innerText[display.innerText.length-1]===("+")){
    display.innerText="please end with #"
  }
	else if(eval(display.innerText)===Infinity){
		display.innerText="error"
	}
  else{
  display.innerText=(eval(display.innerText)).toFixed(2)
}


})



























})
