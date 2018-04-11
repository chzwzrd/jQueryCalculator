$(document).ready(() => {

    // =====================================================================================
    // GLOBAL VARIABLES
    // =====================================================================================
    let num1 = [];
    let num2 = [];
    let operator = '';
    let operatorType = '';
    let result = 0;
    let output = '';

    let num1Clicked = false;
    let num2Clicked = false;
    let operatorClicked = false;
    let decimalClicked = false;
    let equalClicked = false;

    // =====================================================================================
    // GLOBAL FUNCTIONS
    // =====================================================================================
    const resetCalc = () => {
        num1 = [];
        num2 = [];
        num1Clicked = false;
        num2Clicked = false;
        operatorClicked = false;
        decimalClicked = false;
        equalClicked = false;
        $(".calc__display-result").html(0);
        $(".calc__display-output").html(0);
    };

    const renderDisplay = () => {
        handleClear();
        handleButtonClick();
    };

    const handleButtonClick = () => {
        $("button").on('click', function() {

            // if no operator has been clicked yet
            if (!operatorClicked) {
                if ($(this).hasClass('number')) {
                    num1Clicked = true;
                    num1 += $(this).text();
                    output = num1;
                    $(".calc__display-result").html(num1);
                    $(".calc__display-output").html(output);
                } 
                
                if (num1Clicked && $(this).hasClass('operator')) {
                    operatorClicked = true;
                    operator = $(this).text();
                    operatorType = $(this).attr('data-operator');
                    output += operator;
                    $(".calc__display-result").html(operator);
                    $(".calc__display-output").html(output);
                }
            // if operator has been clicked
            } else {
                if ($(this).hasClass('number')) {
                    num2Clicked = true;
                    num2 += $(this).text();
                    output += num2;
                    $(".calc__display-result").html(num2);
                    $(".calc__display-output").html(output);
                }
            }

            // if full expression is provided & equal sign is clicked
            if (num1Clicked && operatorClicked && num2Clicked) {
                if ($(this).hasClass('equal')) {
                    equalClicked = true;
                    num1 = Number(num1);
                    num2 = Number(num2);
                    result = operatorType === 'plus' ? num1 + num2 :
                            operatorType === 'minus' ? num1 - num2 :
                            operatorType === 'times' ? num1 * num2 :
                            operatorType === 'divide' ? num1 / num2 : '';
                    // output += '=' + result;
                    num1 = result;
                    $(".calc__display-result").html(result);
                    $(".calc__display-output").html(output);
                    console.log(num1);
                }
            }
        });
    };

    const handleNumberClick = () => {

    };

    const handleOperatorClick = () => {

    };

    const handleDecimalClick = () => {

    };

    const handleEqualClick = () => {

    };

    const handleClear = () => {
        $(".clear").on('click', () => {
            resetCalc();
        });
    };

    // =====================================================================================
    // MAIN PROCESS
    // =====================================================================================
    resetCalc();
    renderDisplay();

});