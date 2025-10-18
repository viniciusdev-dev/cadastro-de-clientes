let gastos  =[]

const form = document.getElementById("formGastos");
const inputLimite = document.getElementById("limite");
const carro = document.getElementById("carro");
const alerta = document.getElementById("alerta");
const lista = document.getElementById("listaGastos");

form.addEventListener("submit", function (e) {
    e.preventDefault();


const nomeGasto = carro.value.trim();
const limite = parseInt(inputLimite.value);

if (!nomeGasto || isNaN(limite)){
    alerta.textContent = "prencha todos os campo corretamente";
    return;
}

if (gastos.length >= limite) {
    alerta.textContent ="limite de gastos atingido!";
    return;}

    gastos.push({nome: nomeGasto, valor: parseFloat(inputValor.value)});

    atualizarLista();
    somarValores();
    carro.value

    atualizarLista();
    carro.value ="";
}); 

function  atualizarLista() 
{
     lista.innerHTML ="";
     gastos.forEach((gasto, index)=>{
     const item = document.createElement("li");
     item.textContent = '${index + 1} + ${gasto.nome}: R$ {gasto.valor.toFixed(2)}';
     lista.appendChild(item);

    });
}

function somarValores()
{
    const total = gastos.reduce((acc,gasto) => acc + gasto.valor,0);
    totalDisplay.textContent = 'total:R- R$ ${total.toFixed(2)}';
    
}

