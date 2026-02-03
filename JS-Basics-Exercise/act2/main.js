const element = document.getElementById("element");
const item = document.getElementById("item");
let arr = [];
let temp = 0;

function insertItem() {
    if(!(element.value === "")) {
        arr[temp] = element.value;
        displayItems();
        temp++;
        element.value = "";
        console.log(arr);
    }
}

function displayItems() {
    elements.innerHTML = arr(temp);
}