var display=document.getElementById('display')
var btn=document.getElementsByClassName('btn')
for (var i = 0; i < btn.length; i++) {
    btn[i].style.cursor = "pointer";
   
  }
function append(value)
{
    display.value+=value;
}
function clearDisplay()
{
    display.value='';
}
function removeFromDisplay()
{
    display.value=display.value.slice(0,-1);
}
function displayRes()
{
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}