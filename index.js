function scuberGreetingForFeet(someValue){
  let message;
  if (someValue<400){message='This one is on me!'}
  else if(someValue>2000&&someValue<=2500){message='I will gladly take your thirty bucks.'}
  else if (someValue>2500){message='No can do.'}

  return message;



// Write your code here

}

function ternaryCheckCity(city){
  let message;
  if (city!=="NYC"){message='No go.'}
  else {message='Ok, sounds good.'}
  

  return message;
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch(tip){
  case  "generous":
    return "Thank you so much."
  case "not as generous":
   return"Thank you."
  default: 
   return 'Bye.'
  

  
}}