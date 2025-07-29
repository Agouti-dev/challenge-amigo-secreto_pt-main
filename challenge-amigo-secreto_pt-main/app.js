let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    listaAmigos.push(nome);

    input.value = '';
    input.focus();

atualizarLista(); 
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = '';

    listaAmigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent =  `${index + 1}. ${nome}`;
    ul.appendChild(li);
  });
}
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert('A lista está vazia. Adicione pelo menos um nome!');
    return;
  }

  const indice = Math.floor(Math.random() * listaAmigos.length);
  const nomeSorteado = listaAmigos[indice];

  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';

  const li = document.createElement('li');
  li.textContent = `Amigo sorteado: ${nomeSorteado}`;
  ulResultado.appendChild(li);
}