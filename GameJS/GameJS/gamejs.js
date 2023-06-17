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

    question: 'Đảo Sip thuộc châu Á hay châu Âu?',

    answers: [

      { text: 'châu Á.', correct: true },

      { text: 'Châu Âu', correct: false },

      { text: 'Châu Mỹ', correct: false },

      { text: 'Châu Đại Dương', correct: false }

    ]

  },

  {

    question: 'Lục địa nào được phát hiện gần đây nhất?',

    answers: [

      { text: 'Châu Á', correct: false },

      { text: 'Châu Âu', correct: false },

      { text: 'Châu Úc', correct: true },

      { text: 'Châu Nam Cực', correct: false }

    ]

  },

  {

    question: 'Thành phố châu Âu nào được gọi là thành phố vĩnh cửu?',

    answers: [

      { text: 'Thành phố Chennai', correct: false },

      { text: 'Thành Phố LONDON', correct: false },

      { text: 'Thành Phố HCM', correct: false },

      { text: 'Thành phố Roma', correct: true }

    ]

  },

  {

    question: 'Đảo Korsika(Cooc) thuộc nước nào?',

    answers: [

      { text: 'Nước Việt Nam', correct: false },

      { text: 'Nước Pháp', correct: true },

      { text: 'Nước Trung Quốc', correct: false },

      { text: 'Nước Tây Ban Nha', correct: false }

    ]

  },

  {

    question: 'Hồ nội địa nào sâu nhất thế giới?',

    answers: [

      { text: 'Hồ Vostok.', correct: false },

      { text: 'Hồ Bai can', correct: true },

      { text: 'Hồ Ladoga ', correct: false },

      { text: 'Hồ Nicaragua', correct: false }

    ]

  },

  {

    question: 'Cảng nào lớn nhất Đông Á?',

    answers: [

      { text: 'Cảng Bắc Vân Phong', correct: false },

      { text: 'Cảng Busan', correct: false },

      { text: 'Cảng Laem Chabang ', correct: false },

      { text: 'Cảng Thượng hải', correct: true }

    ]

  },

  {

    question: 'Đảo St. Helena nằm ở đâu?',

    answers: [

      { text: 'Nằm giữa Ấn Độ Dương', correct: false },

      { text: 'Nằm giữa Thái Binh Dương', correct: false },

      { text: 'Nằm giữa Đại Tây Dương ', correct: true },

      { text: 'Nằm giữa Bắc Băng Dương', correct: false }

    ]

  },

  {

    question: ' Chim cánh cụt (Pinguin) sống ở đâu?',

    answers: [

      { text: 'Nam Cực', correct: true },

      { text: 'Bắc Cực', correct: false },

      { text: 'Mỹ ', correct: false },

      { text: 'Úc', correct: false }

    ]

  },

  {

    question: 'Brazil nói tiếng gì?',

    answers: [

      { text: 'Tiếng Tây Ban Nha', correct: false },

      { text: 'Tiếng Bồ Đào Nha', correct: true },

      { text: 'Tiếng Việt', correct: false },

      { text: 'Tiếng Anh', correct: false }

    ]

  },

  {

    question: 'Sông nào dài nhất châu Âu?',

    answers: [

      { text: 'Sông Dương Tử', correct: false },

      { text: 'Sông Nile', correct: false },

      { text: 'Sông Volga ', correct: true },

      { text: 'Sông Hoàng Hà', correct: false }

    ]

  },

  {

    question: 'Đỉnh núi cao nhất thế giới tên là gì?',

    answers: [

      { text: 'Đỉnh Everest', correct: true },

      { text: 'Đỉnh phan xi păng', correct: false },

      { text: 'Đỉnh Kinabalu ', correct: false },

      { text: 'Đỉnh Ijen', correct: false }

    ]

  },

  {

    question: 'Đường xích đạo dài bao nhiêu?',

    answers: [

      { text: 'Khoảng 50,000', correct: false },

      { text: 'Khoảng 40,000', correct: true },

      { text: 'Khoảng 60,000 ', correct: false },

      { text: 'Khoảng 30,000', correct: false }

    ]

  }

];
