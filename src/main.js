import StatusBar from './component/status-bar';
import QuestionWZ from './component/questions';
import ActionButton from './component/bottom-button'
import { questions } from './api/data';

import './style.css';

let statusBar;
let questionWz;
let questionsAttempt = 0;
let currentAnswer = null;
let questionContainer;
let actionButton;
let questionsData = questions.map(item => ({ ...item, attempt: '' }));


function showStatusBar() {
    statusBar = new StatusBar();
    document.getElementById('progress-container').innerHTML = statusBar.render();
    statusBar.updateCount = `0/${questionsData.length}`;
    statusBar.progress = updateProgress();
}

function showQuestion() {
    questionWz = new QuestionWZ(questionsData[questionsAttempt], onAnswerSubmit);
    questionContainer = document.getElementById('question-wizard');
    questionContainer.innerHTML = questionWz.render();
}

function showButtons() {
    actionButton = new ActionButton(updateCounter, questionsData.length);
    document.getElementById('action-button').appendChild(actionButton.render());
}

function updateCounter(count, actionType) {
    var indx = questionsAttempt;
    questionsAttempt = count;
    moveToQuestion(questionsData[count]);
    if (actionType !== 'Previous') {
        questionsData[indx].attempt = currentAnswer;
        questionsData[count].attempt.length > 2 ? questionWz.selectPreviousAnswer(questionsData[count].attempt) : '';
        statusBar.updateCount = `${questionsData.filter(item => item.attempt.length > 2).length}/${questionsData.length}`;
        statusBar.progress = updateProgress();
    } else {
        questionWz.selectPreviousAnswer(questionsData[count].attempt);
    }

}

function onAnswerSubmit(option) {
    currentAnswer = option;
    actionButton.allowCounter();
}

function moveToQuestion(num) {
    questionWz.changeQuestion(num);
    questionContainer.innerHTML = questionWz.render();
}

function updateProgress() {
    return (questionsAttempt / questionsData.length * 100)
}

showStatusBar();
showQuestion();
showButtons();