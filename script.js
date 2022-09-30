const input=document.getElementById("playground");
const formData = document.getElementById("playground");

input.addEventListener("input",function(event) {
    console.log(event.target.value);
});
formData.addEventListener("submit", function(event) {
    event.preventDefault
});