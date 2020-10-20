function showresult(choice) {

    var number1 = parseFloat(document.getElementById('num1').value);
    var number2 = parseFloat(document.getElementById('num2').value);


    var calculate;
    var c = choice;

    switch(c) {

        case '1':
            calculate = number1 + number2;
            break;
        
        case '2':
            calculate = number1 - number2;
            break;

        case '3':
            calculate = number1 * number2;
            break;

        case '4':
            calculate = number1 / number2;
            break;
    }

    document.getElementById('result').value = calculate
}

