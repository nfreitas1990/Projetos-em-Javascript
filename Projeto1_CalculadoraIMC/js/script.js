//
function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

//1.Função calcular IMC
function caculateImc(weight, height) {
  return weight / (height * height);
}

//2. Função para clicar e pegar os num. para calcular IMC
function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  var imcResult = document.querySelector('#imc-result');

  var imc = caculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formattedImc;

  var WriteResult = document.querySelector('#imc-result-write');
  var imcWriteResult;

  if (imc >= 16 && imc <= 16.9) {
    imcWriteResult = 'Muito Abaixo do Peso';
  } else if (imc > 16.9 && imc <= 18.4) {
    imcWriteResult = 'Abaixo do Peso';
  } else if (imc > 18.4 && imc <= 24.9) {
    imcWriteResult = 'com Peso Normal';
  } else if (imc > 24.9 && imc <= 29.9) {
    imcWriteResult = 'Acima do Peso';
  } else if (imc > 29.9 && imc <= 34.9) {
    imcWriteResult = 'com Obesidade grau I';
  } else if (imc > 34.9 && imc <= 40) {
    imcWriteResult = 'com Obesidade grau II';
  } else if (imc > 40) {
    imcWriteResult = 'com Obesidade grau III';
  } else {
    imcWriteResult = 'Valor fora da tabela';
  }
  return (WriteResult.textContent = imcWriteResult);
}

start();

// a medida q vai trocando o valor, vai calculando automático
//var inputWeight = document.querySelector('#input-weight');
// var inputHeight = document.querySelector('#input-height');

// inputWeight.addEventListener('input', handleButtonClick);
// inputHeight.addEventListener('input', handleButtonClick);
