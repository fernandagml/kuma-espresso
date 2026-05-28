const cards = document.querySelectorAll('.product-card');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;

// Função para avançar (Giro Horário: 180deg)
function showNextProduct() {
  const currentCard = cards[currentIndex];
  
  // 1. Faz a xícara atual sair girando para 180deg
  currentCard.classList.remove('active');
  currentCard.classList.add('exit-next');
  
  // Limpa a classe de saída após a animação
  setTimeout(() => {
    currentCard.classList.remove('exit-next');
  }, 1200);

  // 2. Atualiza o índice
  currentIndex = (currentIndex + 1) % cards.length;
  const nextCard = cards[currentIndex];

  // 3. Prepara a próxima xícara vindo do -180deg
  nextCard.classList.add('enter-next');

  // Força o navegador a aplicar o posicionamento antes de animar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nextCard.classList.remove('enter-next');
      nextCard.classList.add('active');
    });
  });
}

// Função para voltar (Giro Anti-Horário: -180deg)
function showPrevProduct() {
  const currentCard = cards[currentIndex];
  
  // 1. Faz a xícara atual sair girando para -180deg
  currentCard.classList.remove('active');
  currentCard.classList.add('exit-prev');
  
  setTimeout(() => {
    currentCard.classList.remove('exit-prev');
  }, 1200);

  // 2. Atualiza o índice (prevenindo negativos)
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  const prevCard = cards[currentIndex];

  // 3. Prepara a xícara anterior vindo do 180deg
  prevCard.classList.add('enter-prev');

  // Força o navegador a aplicar o posicionamento antes de animar
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      prevCard.classList.remove('enter-prev');
      prevCard.classList.add('active');
    });
  });
}

// Event Listeners
nextBtn.addEventListener('click', showNextProduct);
prevBtn.addEventListener('click', showPrevProduct);