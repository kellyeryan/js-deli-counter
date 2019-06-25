function takeANumber(katzDeliline, name){
  var lineNumber = katzDeliline.length + 1;
  var output = "Welcome, " + name + ". You are number " + lineNumber + " in line.";
  katzDeliline.push(name);
  return output
}

function nowServing(katzDeliline){
  if(katzDeliline.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let firstPerson = katzDeliline.splice(0, 1)
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine){
  const array = []
  const outputToString = "The line is currently:"
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
      array.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    const line = array.join()
    return outputToString + line
  }
}




