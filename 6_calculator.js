function sin(){
    document.Calculator.result.value=Math.sin(document.Calculator.result.value);
}
function cos(){
    document.Calculator.result.value=Math.cos(document.Calculator.result.value);
}
function tan(){
    document.Calculator.result.value=Math.tan(document.Calculator.result.value);
}
function BACKSPC(){
    var a=document.Calculator.result.value;
    document.Calculator.result.value=a.substr(0,a.length-1);
}
function square(){
    document.Calculator.result.value= Math.pow(document.Calculator.result.value,2);
}
function cube(){
   document.Calculator.result.value=Math.pow(document.Calculator.result.value,3);
}
function sqrt2(){
    document.Calculator.result.value=Math.pow(document.Calculator.result.value,1/2);
}
function sqrt3(){
    document.Calculator.result.value=Math.pow(document.Calculator.result.value,1/3);
}
function number(value){
    document.Calculator.result.value+=value;
}
function equal(){
    document.Calculator.result.value=eval(document.Calculator.result.value);
}
function remv(){
    document.Calculator.result.value="";
}
