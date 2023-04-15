const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

/**
 * Start the game by hiding the start button and shuffling the questions
 */
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

/**
 * Start the game by hiding the start button and shuffling the questions
 */
function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

/**
 * Set the next question
 */
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Show the question and its answers
 * @param {Object} question 
 */
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

/**
 * Reset the state of the game
 */
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

/**
 * Select an answer and set the status class
 * @param {Event} e 
 */
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

/**
 * Set the status class
 * @param {HTMLElement} element 
 * @param {Boolean} correct 
 */
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

/**
 * Clear the status class
 * @param {HTMLElement} element 
 */
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'Thủ đô của Việt Nam',
    answers: [
      { text: 'Hà Nội', correct: true },
      { text: 'TP Hồ Chí Minh', correct: false }
    ]
  },
  {
    question: 'Người lãnh tụ vĩ đại của dân tộc Việt Nam là ai?',
    answers: [
      { text: 'Hồ Chí Minh', correct: true },
      { text: 'Tổng thống Dương Văn Minh', correct: false },
    ]
  },
  {
    question: '30/4/1975 là ngày gì?',
    answers: [
      { text: 'Chiến dịch Điện Biên Phủ', correct: false },
      { text: 'Quốc khánh nước cộng hòa xã hội chủ nghĩa Việt Nam', correct: false },
      { text: 'Chiến dịch Điện Biên Phủ trên không', correct: false },
      { text: 'Chiến dịch Hồ Chí Minh lịch sử toàn thắng', correct: true }
    ]
  },
  {
    question: 'Đại tướng vĩ đại thân cận bên Bác Hồ là ai?',
    answers: [
      { text: 'Lê Liêm', correct: false },
      { text: ' Hoàng Văn Thái', correct: false },
      { text: ' Đặng Kim Giang', correct: false },
      { text: 'Võ Nguyên Giáp', correct: true }
    ]
  },
  {
    question: 'Hoàng Sa và Trường Sa thuộc nước nào?',
    answers: [
        { text: 'Trung Quốc', correct: false },
        { text: 'Việt Nam', correct: true},
        { text: 'Indonesia', correct: false },
        { text: 'Philippines', correct: false},
    ]
},
{
  question: 'Ai là người lái xe tăng tông vào cổng Dinh độc lập?',
  answers: [
      { text: ' Đại đội trưởng Bùi Quang Thận', correct: true },
      { text: 'Văn Tiến Dũng', correct: false},
      { text: 'Phùng Thế Tài', correct: false },
      { text: 'Lê Văn Tri', correct: false},
  ]
},
{
  question: 'Lá cờ đỏ sao vàng xuất hiện lần đầu tiên vào thời gian nào? Do ai sáng tác?',
  answers: [
      { text: '  Ngày 19/8/1945 tại thủ đô Hà Nội, do Văn Cao sáng tác', correct: false },
      { text: ' Ngày 23/11/1940 tại cuộc khởi nghĩa Nam Kỳ do đồng chí Nguyễn Hữu Tiến sáng tác.', correct: true},
      { text: 'Ngày 27/9/1940 tại khởi nghĩa Bắc Sơn do đồng chí Hoàng Văn Hán sáng tác.', correct: false },
  ]
},
{
  question: '"Dân ta phải biết sử ta Cho tường gốc tích nước nhà Việt Nam" là câu nói nổi tiếng của ai?',
  answers: [
      { text: ' Trần Hưng Đạo', correct: false },
      { text: ' Phạm Văn Đồng', correct: false},
      { text: 'Hồ Chí Minh', correct: true },
  ]
},
{
  question: 'Ai là người lái xe tăng tông vào cổng Dinh độc lập?',
  answers: [
      { text: ' Đại đội trưởng Bùi Quang Thận', correct: true },
      { text: 'Văn Tiến Dũng', correct: false},
      { text: 'Phùng Thế Tài', correct: false },
      { text: 'Lê Văn Tri', correct: false},
  ]
},
];