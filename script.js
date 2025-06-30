let userInput = document.getElementsByTagName("input")[0];
let qrImg = document.getElementById("qr-img-code");
let btn = document.getElementsByTagName("button");
let qrImgDisplay = document.getElementById("qr-img-code");
let items = document.getElementsByClassName("itemShow")[0];

btn[0].addEventListener("click", () => {
    let userValue = userInput.value.trim();
    if (userValue) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${userValue}`;
        qrImgDisplay.style.display = "inline-block";
        items.style.display = "flex";
        userInput.value = "";
    } else {
        alert("Please enter some text to generate a QR code.");
    }
});



