var quantity = 1;
var quantityInput = document.getElementById("quantity");
quantityInput.addEventListener('mousedown', function () { invalidUserInput() } );

var inputActive = false;

function setValue() {
    quantityInput.value = quantity;
}

function increase() {
    if (quantityInput.value <= 49) {
        ++quantityInput.value;
    }
}

function decrease() {
    if (quantityInput.value >= 1) {
        --quantityInput.value;
    }
}

function invalidUserInput() {
    if (quantityInput.value > 50 || quantityInput.value < 0)
    {
        quantityInput.value = quantity;
    }
}

window.setValue();