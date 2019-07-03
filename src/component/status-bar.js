function getElement(ele) {
    return ele ? ele : document.querySelectorAll('[data-progress]')[0];
}
export default class StatusBar {
    constructor() {
        this.value = 0;
    }

    set updateCount(value) {
        document.getElementById('progress-count').innerHTML = value;
    }

    set progress(value) {
        this.value = value;
        this.element = getElement(this.element);
        this.element.value = value;
    }

    get progress() {
        return this.value;
    }

    render() {
        return `<div id="progress-count">1/2</div><div><progress data-progress='data-progress'  max='100' value='${this.value}' /></div>`;
    }
}