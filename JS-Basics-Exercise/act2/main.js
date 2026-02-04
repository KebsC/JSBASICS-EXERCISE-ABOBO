const element = document.getElementById("element");
const elementsdisplay = document.getElementById("elements");
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
    
    elementsdisplay.innerHTML = "";

    for(let i = 0; i < arr.length; i++) {
        elementsdisplay.innerHTML += arr[i] + " ";
    }
}

function clearItems() {
    arr = [];
    temp = 0;
    elementsdisplay.innerHTML = "";
}