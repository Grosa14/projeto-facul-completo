function atualizarDescricao() {
  const inputDescricao = document.getElementById("inputDescricao").value;
  document.getElementById("descricao").textContent = inputDescricao;
}

let listaUCs = [];

function adicionarUC() {
  const nomeUC = prompt("Insira o nome da UC:");
  if (nomeUC) {
    listaUCs.push(nomeUC);
    exibirListaUCs();
  }
}

function moverUC(index, direction) {
  if (direction === "up" && index > 0) {
    [listaUCs[index], listaUCs[index - 1]] = [
      listaUCs[index - 1],
      listaUCs[index],
    ];
  } else if (direction === "down" && index < listaUCs.length - 1) {
    [listaUCs[index], listaUCs[index + 1]] = [
      listaUCs[index + 1],
      listaUCs[index],
    ];
  }
  exibirListaUCs();
}

function validarCPF() {
  const cpf = document.getElementById("cpf").value;
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const cpfErro = document.getElementById("cpfErro");

  if (!cpfRegex.test(cpf)) {
    cpfErro.textContent = "CPF inválido. O formato correto é ddd.ddd.ddd-dd.";
  } else {
    cpfErro.textContent = "";
  }
}

function validarEmail() {
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailErro = document.getElementById("emailErro");

  if (!emailRegex.test(email)) {
    emailErro.textContent = "E-mail inválido. Verifique o formato.";
  } else {
    emailErro.textContent = "";
  }
}
