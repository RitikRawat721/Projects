const btn = document.getElementById("newColor");
const color = document.getElementById("color");

const hexValues = ["0", "1" ,"2", "3", "4", "5" ,"6" ,"7", "8", "9", "A", "B", "C", "D", "E", "F"];

const randomHex = ()=> {

    const randomHexIndex  = Math.floor(Math.random() * hexValues.length);
    return hexValues[randomHexIndex];

}


const generateRandomHex = (length) => {

    let colorHexValue = '';

    for(let i = 0; i < length; i++){
        colorHexValue += randomHex();
    }

    return colorHexValue;
}

btn.addEventListener('click', ()=> {
    const newColor = '#' + generateRandomHex(6);
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
})