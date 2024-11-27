const students = [
  {
    name: "Aluno 1",
    quote: "Eu me sinto desmotivado na maioria das vezes, geralmente assisto as aulas quando os módulos estão vencendo e às vezes acabo não absorvendo o conteúdo como deveria",
  },
  {
    name: "Aluno 2",
    quote: "Eu gosto de estudar no meu próprio ritmo, mas às vezes sinto falta de mais interação com outros colegas.",
  },
  {
    name: "Aluno 3",
    quote: "Adoro como os conteúdos são organizados, mas acho difícil manter a disciplina para seguir o cronograma.",
  },
  {
    name: "Aluno 4",
    quote: "Sinto que preciso de mais exercícios práticos para consolidar o que aprendo durante as aulas.",
  },
  {
    name: "Aluno 5",
    quote: "Estou muito satisfeito com o curso, mas gostaria de ver mais estudos de caso aplicados à prática.",
  },
];

// Elementos do DOM
const studentName = document.getElementById("student-name");
const studentQuote = document.getElementById("student-quote");
const pageIndicator = document.getElementById("page-indicator");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

const prototypeLinkMobile = 'https://www.figma.com/proto/9KAGkdCHp9WiSw4dxBDzNp/Desenvolvimento-Projeto-TCC?page-id=642%3A1051&node-id=642-1379&node-type=frame&viewport=242%2C206%2C0.14&t=gglCnt2NCg96LVQq-1&scaling=contain&content-scaling=fixed&starting-point-node-id=642%3A1379&show-proto-sidebar=1';
const prototypeLinkDesktop = 'https://www.figma.com/proto/9KAGkdCHp9WiSw4dxBDzNp/Desenvolvimento-Projeto-TCC?page-id=133%3A3&node-id=348-5743&node-type=frame&viewport=115%2C252%2C0.09&t=N4H6Ch97eaaQE4Dm-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=368%3A21160';
const promotionalLink = 'https://www.youtube.com/watch?v=A0JpB3dSmT4';

// Índice atual
let currentIndex = 0;

// Função para atualizar o conteúdo
function updateCard(index) {
  const student = students[index];
  studentName.textContent = student.name;
  studentQuote.textContent = student.quote;
  pageIndicator.textContent = `${index + 1}/${students.length}`;
}

// Event Listeners
arrowRight.addEventListener("click", () => {
  if (currentIndex < students.length - 1) {
    currentIndex++;
    updateCard(currentIndex);
  }
});

arrowLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCard(currentIndex);
  }
});

updateCard(currentIndex);

function openLink() {
  if (window.innerWidth < 1440) {
    window.open(prototypeLinkMobile, '_blank');
  } else {
    window.open(prototypeLinkDesktop, '_blank');
  }
}

function openVideo() {
  window.open(promotionalLink);
}