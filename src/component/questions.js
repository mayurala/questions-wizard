import AnswerOption from './answer-type';

export default class QuestionWZ extends AnswerOption {
    constructor(question, cb) {
        super(question.type, question.options);
        this.question = question;
        document.addEventListener('click', function (event) {
            if (!event.target.matches('.radio')) return;
            cb(event.target.value);
        });
        document.addEventListener('change', function (event) {
            if (!event.target.matches('.dropdown')) return;
            cb(event.target.value);
        });
    }

    changeQuestion(question) {
        this.question = question;
        this.type = question.type;
        this.option = question.options;
    }


    render() {
        return `<div><h3>${this.question.title}</h3></div>${this.question.type === 'radiogroup' ? this.typeRadio() : this.typeDropDown()}`;
    }
}