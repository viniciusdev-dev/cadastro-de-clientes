import { Cliente } from "./classes.js";
import { validarEmail, limparcampos } from "./utils.js";

const form = document.getElementById('clienteForm');
const lista = document.getElementById('listaClientes');

let clientes = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').vale.trim();
    const email = document.getElementById('email').Value.trim();

    if (!validarEmail(emial)){
        alert('email ivalido!');
        return;
    }

    const novoCliente = new Cliente(nome,email);
    clientes.push(novoCliente);
    atualizarLista();
    limparcampos(document.getElementById('nome'), document.getElementById('email'))
});

function atualizarLIsta(){
      lista.innerHTML = '';
       clientes.map(cliente =>{
        const item = document.createElement('li');
        item.textContent = `${cliente.nome} - ${cliente.email}`;
        lista.appendChild(item);
       })
}
    
