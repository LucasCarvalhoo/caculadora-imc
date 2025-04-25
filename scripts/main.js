let calculateIMC = () => {
    let weight = Number(document.getElementById('weight').value)
    let height = Number(document.getElementById('height').value)

    heightSquared = Math.pow(height, 2);
    result = weight / heightSquared;

    console.log(result)
}

let calculate = document.getElementById('calculate')
calculate.addEventListener('click', calculateIMC)

