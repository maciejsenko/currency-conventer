let formElement = document.querySelector(".form");
let sumElement = document.querySelector(".js-sum");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.5683;
let rateGBP = 5.2458;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let sum = sumElement.value;
    let currency = currencyElement.value;

    let result
    switch (currency) {
        case "EUR":
            result = sum / rateEUR
            break;
        case "GBP":
            result = sum / rateGBP
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
