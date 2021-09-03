class GuessingGame {
    constructor() {
		let min = null;
		let max = null;
		let result = null;
	}

    setRange(min, max) {
		this.min = min;
		this.max = max;
    }

    guess() {
		this.result = Math.round((this.min + this.max) / 2);
		return this.result;
    }

    lower() {
		this.max = this.result;
    }

    greater() {
		this.min = this.result;
    }
}

module.exports = GuessingGame;
