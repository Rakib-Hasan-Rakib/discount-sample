
function parcentageCalculator(number1, number2) {
    let parcentNumber = number2 / 100;
    let discountNumber = number1 * parcentNumber;
    return number1 - discountNumber;
}

function takeInputValue(inputId) {
    const inputSelect = document.getElementById(inputId);
    const inputString = inputSelect.value;
    const inputValue = parseFloat(inputString);
    inputSelect.value = '';
    return inputValue;
}


document.getElementById('apply-btn').addEventListener('click', function (event) {

    const price = takeInputValue('price-input');
    const discount = takeInputValue('disc-input');
    const haveToPay = parcentageCalculator(price, discount);

    const coupon = document.getElementById('coupon-input');
    const couponValue = coupon.value;
    coupon.value = '';


    if (isNaN(haveToPay) === false) {
        if (couponValue === "DISCOUNT") {
            const newElement = document.createElement('p');
            newElement.innerText = `please pay $${haveToPay} for purchase`;
            newElement.style.fontSize = '20px';
            document.getElementById('parent-div').appendChild(newElement);
        } else {
            const newElement = document.createElement('p');
            newElement.innerText = '!wrong coupon code';
            newElement.style.fontSize = '15px';
            newElement.style.color = 'red';
            document.getElementById('parent-div').appendChild(newElement);
        }
    } else {
        const newElement = document.createElement('p');
        newElement.innerText = '!wrong input. please provide valid input';
        newElement.style.color = 'red';
        document.getElementById('parent-div').appendChild(newElement);
    }

    event.preventDefault();
})