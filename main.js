const form = document.getElementById('form-n');
const numeroA = document.getElementById('campo-a');
const numeroB = document.getElementById('campo-b');

function validaNumeros(numeroA, numeroB) {
    const numeroValidadoA =  numeroA;
    const numeroValidadoB = numeroB;
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const ms = `Numero <b>${numeroA.value}</b> é menor que numero <b>${numeroB.value}</b>`;
    const me = `Numero <b>${numeroA.value}</b> é maior que numero <b>${numeroB.value}</b>, logo conserte para seu forms ser enviado!`;
    formEValido = validaNumeros(numeroA.value, numeroB.value);
    if (formEValido){
    const containerMS = document.querySelector('.sucess-message'); 
    containerMS.innerHTML = ms;
    containerMS.style.display = 'block';
    nA = '';
    nB = '';    
    } else {
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.error-message').innerHTML = me;
    }
})


