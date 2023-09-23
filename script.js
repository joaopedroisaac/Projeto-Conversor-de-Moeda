const convertButton = document.querySelector("#main-button")
const selectConvert = document.querySelector("#select-convert")
const selectConverted = document.querySelector("#select-converted")


function convertValues(){
    const inputValueConvert = document.querySelector("#input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.9
    const euroToday = 5.3
    const libraToday = 6
    const bitcoinToday = 131172.04

    if (selectConverted.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueConvert / dolarToday)
    }

    if (selectConverted.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueConvert / euroToday)
    }

    if (selectConverted.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueConvert / libraToday)
    }

    if (selectConverted.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueConvert / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValueConvert)


} 

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (selectConverted.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (selectConverted.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (selectConverted.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (selectConverted.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }


    convertValues()
}

selectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)