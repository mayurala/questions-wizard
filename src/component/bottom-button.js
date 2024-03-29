import { QuestionButtons } from './button';

export default class ActionButton {
    constructor(action, maxValue) {
        this.buttonLabel = ['Previous', 'Next', 'Submit']
        this.currentCount = 0;
        this.willCounterMove = false;
        this.action = action;
        this.maxValue = maxValue;
    }

    allowCounter() {
        this.willCounterMove = true;
    }
    render() {
        return this.getElement();
    }

    getElement() {
        const element = document.createElement('div');
        element.innerHTML = (`${this.buttonLabel.map(item => QuestionButtons(item))}`);
        element.querySelector('#' + this.buttonLabel[0]).style.display = 'none';
        element.querySelector('#' + this.buttonLabel[2]).style.display = 'none';
        element.onclick = e => {
            if (!this.willCounterMove && e.target.innerText !== this.buttonLabel[0]) {
                alert('Please provide the answer before move to next!')
                return;
            }
            var indx = 0;
            switch (e.target.innerText) {
                case this.buttonLabel[0]:
                    indx = -1;
                    break;
                case this.buttonLabel[1]:
                    indx = 1;
                    break;
            }
            this.currentCount = indx === -1 ? Math.max(this.currentCount + indx, 0) : Math.min(this.currentCount + indx, this.maxValue - 1);
            this.willCounterMove = false;
            this.currentCount === 0 ? document.getElementById(this.buttonLabel[0]).style.display = 'none' : document.getElementById(this.buttonLabel[0]).style.display = 'inline-block';
            if (this.currentCount === this.maxValue - 1) {
                document.getElementById(this.buttonLabel[0]).style.display = 'none';
                document.getElementById(this.buttonLabel[1]).style.display = 'none';
                document.getElementById(this.buttonLabel[2]).style.display = 'inline-block';
            }
            this.action(this.currentCount, e.target.innerText);
        }
        return element;
    }

}