var methodSelector;
var firstInput;
var secondInput;
var thirdInput;
var results;

var methodTest = function(){
  methodSelector = document.getElementById('methods')
  firstInput = document.getElementById('firstInput')
  secondInput = document.getElementById('secondInput')
  thirdInput = document.getElementById('thirdInput')
  results = document.getElementById('results')

  switch (methodSelector.value) {
    case 'length':
    results.innerText = 'El length del texto es: ' + firstInput.value.length;
    break

    case 'concat':
    results.innerText = 'El resultado concatenado es: ' + firstInput.value.concat(secondInput.value);
    break

    case 'upperCase':
    results.innerText = 'El texto en mayúsculas es: ' + firstInput.value.toUpperCase();
    break

    case 'lowerCase':
    results.innerText = 'El texto en minúscula es: ' + firstInput.value.toLowerCase();
    break
    
    case 'charAt':
    results.innerText = 'El caracter es: ' + firstInput.value.charAt(secondInput.value);
    break

    case 'slice':
    results.innerText = 'El resultado es: ' + firstInput.value.slice(secondInput.value, thirdInput.value);
    break

    case 'substring':
    results.innerText = 'El resultado es: ' + firstInput.value.slice(secondInput.value, thirdInput.value);
    break

    case 'substring':
    results.innerText = 'El resultado es: ' + firstInput.value.substring(secondInput.value, thirdInput.value);
    break

    case 'split':
    results.innerText = 'El resultado es: ' + firstInput.value.split(secondInput.value);
    break
    
    case 'replace':
    results.innerText = 'El resultado es: ' + firstInput.value.replace(secondInput.value, thirdInput.value);
    break
    
    case 'indexof':
    results.innerText = 'El resultado es: ' + firstInput.value.indexOf(secondInput.value);
    break
  }
}