function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!'
  }
  else if (ride >= 2500) {
    return 'No can do.'
  }
  else if (ride >= 2000) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (ride >= 400) {
    return 'That will be twenty bucks.'
  }
}

function ternaryCheckCity(city){
let cityMessage
cityMessage = city === "NYC" ? "Ok, sounds good." : "No go.";
return cityMessage;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye."
}
}