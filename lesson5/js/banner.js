var date = new Date();
var today = date.getDay();
var banner = document.getElementById("banner");
if (today == 5) {
    banner.style.display = "block";
}
else {
    banner.style.display = "none";
}
