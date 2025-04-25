let calculateIMC = () => {
    let weight = Number(document.getElementById('weight').value)
    let height = Number(document.getElementById('height').value)

    heightSquared = Math.pow(height, 2);
    result = (weight / heightSquared).toFixed(2);

    let resultIMC = document.getElementById('imc-value')
    let resultArea = document.getElementById('result-area').style.display = 'block';
    return resultIMC.innerText = result
}

let calculate = document.getElementById('calculate')
calculate.addEventListener('click', calculateIMC)

