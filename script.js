$(document).ready(() => {

    // =====================================================================================
    // GLOBAL VARIABLES
    // =====================================================================================
    const result = '';
    const output = '';
    const buttonClicked = false;
    const numberClicked = false;
    const operatorClicked = false;
    const decimalClicked = false;
    const equalClicked = false;

    // =====================================================================================
    // GLOBAL FUNCTIONS
    // =====================================================================================
    const resetCalc = () => {
        buttonClicked = false;
        numberClicked = false;
        operatorClicked = false;
        decimalClicked = false;
        equalClicked = false;
        $(".calc__display-result").html(0);
        $(".calc__display-output").html(0);
    };

    const renderDisplay = () => {
        handleButtonClick();
    };

    const handleButtonClick = () => {
        $("button").on('click', function() {
            if (!buttonClicked) {
                if ($(this).hasClass('number')) {
                    handleNumberClick();
                } else if ($(this).hasClass('operator')) {
                    handleOperatorClick();
                } else if ($(this).hasClass('decimal')) {
                    handleDecimalClick();
                } else if ($(this).hasClass('equal')) {
                    handleEqualClick();
                } else if ($(this).hasClass('clear')) {
                    handleClear();
                }
            } else {
                buttonClicked = true;
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