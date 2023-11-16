function appendtoStr(value)
{
 document.getElementById("ans").innerHTML+=value;
}
function calculate()
{
const b=document.getElementById("ans").innerHTML;
try{
  var k=eval(b);
  if(isFinite(k))
  document.getElementById("ans").innerText=(k);
  else
  document.getElementById("ans").innerHTML="ERROR";
}
catch(error)
{  
    document.getElementById("ans").innerHTML="ERROR";
}
}
function clearDisplay()
{
    
    document.getElementById("ans").innerText="";
   
}
function deleteLastCharacter() {
    const display = document.getElementById("ans");
    const currentText = display.innerHTML;
    
    if (currentText.length > 0) {
      const newText = currentText.slice(0, -1);
      display.innerHTML = newText;
    }
  }
  