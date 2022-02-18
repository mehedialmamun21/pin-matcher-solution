function displayPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinLength = (pin + '').length;
    if (pinLength == 4) {
        const showPin = document.getElementById('show-pin');
        showPin.value = pin;
    } else {
        displayPin();
    }
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const inputKey = document.getElementById('input-key');
    const x = inputKey.value;
    if (isNaN(number)) {
        if (number == 'C') {
            inputKey.value = '';
        }
        if (number == '<') {
            inputKey.value = x.substring(0, x.length - 1);
        }
    } else {
        inputKey.value = inputKey.value + number;
    }
})
function submitClickFunction() {
    const showPin = document.getElementById('show-pin').value;
    const inputKey = document.getElementById('input-key').value;
    const successMessage = document.getElementById('success-message')
    const failMessage = document.getElementById('fail-message');
    if (showPin == inputKey) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {

        failMessage.style.display = 'block';
        successMessage.style.display = 'none';

        const tryLeftId = document.getElementById('try-left-id');
        tryLeftId.style.display = 'block';

        if (showPin != inputKey) {
            const tryLeft = document.getElementById('try-left');
            tryLeftText = tryLeft.innerText;
            const tryLeftValue = parseInt(tryLeftText);
            tryLeft.innerText = tryLeftValue - 1;
            if (tryLeft.innerText == 0) {
                tryLeft.innerText = 'try after 5 minutes!';
                const tryLeftText = document.getElementById('try-left-text');
                tryLeftText.innerText = '';
            }
        }


    }
}