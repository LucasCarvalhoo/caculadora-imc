let calculateIMC = () => {
    const weight = Number(document.getElementById('weight').value)
    const height = Number(document.getElementById('height').value)

    heightSquared = Math.pow(height, 2);
    result = (weight / heightSquared).toFixed(2);
    let resultFormatted = result.toString().replace('.', ','); 

    const resultIMC = document.getElementById('imc-value')
    let resultArea = document.getElementById('result-area');
    resultArea.style.display = 'block';
    return resultIMC.innerText = resultFormatted
}

const calculate = document.getElementById('calculate')
calculate.addEventListener('click', calculateIMC)

