// Obtém referência aos botões de navegação
const navButtons = document.querySelectorAll('.header__nav-item');

// Adiciona evento de clique aos botões de navegação
navButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    // aqui você pode adicionar a funcionalidade desejada para cada botão de navegação
    console.log(event.target.textContent);
  });
});
