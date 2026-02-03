const price = document.getElementById("price");
const tax = document.getElementById("tax");
const result = document.getElementById("total");
let total = 0;

function calculate() {
    if(!(price.value === "" || tax.value === "")) {
        total = parseFloat(price.value) + parseFloat(tax.value);
        result.innerHTML = total;
    }
}


function clearEntries() {
    price.value = "";
    tax.value = ""
    result.innerHTML = "";
    total = 0;

}