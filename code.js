function changColor(getColor){
    let bg = document.querySelector(".bg");
    let selectColor = getColor.value;
    let text = getColor.options[getColor.selectedIndex].text;
    bg.style.background = selectColor;
    bg.innerHTML = text;
    let border = document.querySelector(".selectColor");
    border.style.borderColor = selectColor;
}