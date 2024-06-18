document.addEventListener('DOMContentLoaded', (event) => {
  // Menu hambuguer
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('active');
  });

  // Formulário
  document.getElementById('Formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const botaoInscricao = document.getElementById('botaoInscricao').checked;


  
    if (nome.length < 3) {   // para o cmapo nome ter no minimo 3 caracteres 
      alert("O campo Nome deve ter mais de 3 caracteres.");
      return;
    }

  
    
    const regexNome = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/;  // para aceitar apenas letras no campo nome
  
    if (!regexNome.test(nome)) {
      alert("O campo Nome só aceita letras e espaços.");
      return;
    }

    if (email === "") {
      alert("Você não preencheu o campo Email, por favor preencha.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Este é um endereço de email inválido. Insira um endereço de email válido.");
      return;
    }

    if (!botaoInscricao) {
      alert("Por favor, marque a caixa para se inscrever na newsletter.");
      return;
    }


     
    alert("Formulário enviado com sucesso!");
    this.submit(); // Se todas as validações passarem envia o formulário
  });

 
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // validar o formato do email
    return re.test(email);
  }
});
//formulario
