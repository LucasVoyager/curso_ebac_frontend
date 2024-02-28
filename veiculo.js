function Transporte(meio) {
    this.meio = meio;
}

function Veiculo(meio, tipo, velocidade) {
    this.tipo = tipo;
    let _velocidadeMax = velocidade;
    this.getVelocidade = function() {
        return _velocidadeMax;
    }
    this.setVelocidade = function(valor) {
        if(typeof valor === 'number' && valor > 0)  {
            _velocidadeMax = valor;
        }
    }

    Transporte.call(this, meio);
}

function Aviao(tipo, nome) {
    this.nome = nome;
    Veiculo.call(this, tipo, "Aviao");
}

function Automovel(tipo, nome) {
    this.nome = nome;
    Veiculo.call(this, tipo, "Carro")
}

const boeing = new Aviao("Aereo", "Boeing 737");
const porsche = new Automovel("Terrestre", "Porsche 911");
const brasilia = new Automovel("Terrestre", "Brasilia");


boeing.setVelocidade(1329);
console.log(boeing.getVelocidade());
porsche.setVelocidade(280);
console.log(porsche.getVelocidade());
brasilia.setVelocidade(130);
console.log(brasilia.getVelocidade());

console.log(boeing);
console.log(porsche);
console.log(brasilia);
