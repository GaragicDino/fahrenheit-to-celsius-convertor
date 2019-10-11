// Fahrenheit to Celsius

//Event Listener
document.getElementById('convert').addEventListener('click', calcTotal)

//Event Function
function calcTotal() {
    //INPUT - Put in the number you want to convert
    let num1 = Number(document.getElementById('num1').value);
    
    console.log(num1)
    console.log(typeof(num1))

    //PROCESS - add the formula together
    let total  = ((num1)- 32) * 5 / 9

    //OUTPUT - display the total
    document.getElementById('result').innerHTML = total;
}