const newHeader = document.getElementById('header-input');
const originalHeader = document.getElementById("header").innerHTML;

function changeHeader() {
    document.getElementById("header").innerHTML = newHeader.value;
}

function resetHeader() {
    document.getElementById("header").innerHTML = originalHeader;
}