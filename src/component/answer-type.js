export default class AnswerOption {
    constructor(type, option) {
        this.type = type;
        this.option = option || [];
    }

    typeRadio() {
        return `<div>
        ${ this.option.map(
                (item) => `<input type="radio" class="radio" name="answer" value="${item}">${item}<br>`)}
      </div>`
    }

    typeDropDown() {
        return `<select class="dropdown">
        ${ this.option.map(
                (item) => `<option  value="${item}">${item}</option>`)}
      </select>`
    }

    selectPreviousAnswer(eleName) {
        if (this.type === 'radiogroup') {
            const ele = document.querySelectorAll('input[name="answer"]');
            ele.forEach(item => {
                item.value === eleName ? item.checked = true : '';
            });
        } else {
            document.querySelector('.dropdown').value = eleName;
        }
    }

}