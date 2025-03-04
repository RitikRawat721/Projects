function diceRoll() {
    const inp = document.getElementById("userInp").value;
    const diceResults = document.getElementById("diceResults");
    const diceImg = document.getElementById("diceImg");
    const values = [];
    const images = [];

    for (let i = 0; i < inp; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value);
        images.push(`<img id="dices" src="dice_images/dice_${value}.png" alt="dice${value}">`)
    }
    diceResults.textContent = `dice: ${values.join(", ")}`
    diceImg.innerHTML = images.join(' ')
}

