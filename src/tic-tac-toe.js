class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.matrix = [[null, null, null],
                       [null, null, null],
                       [null, null, null]];
        this.getCurrentPlayerSymbol = this.getCurrentPlayerSymbol.bind(this);
        this.nextTurn = this.nextTurn.bind(this);
        this.isFinished = this.isFinished.bind(this);
        this.getWinner = this.getWinner.bind(this);
        this.noMoreTurns = this.noMoreTurns.bind(this);
        this.isDraw = this.isDraw.bind(this);
        this.getFieldValue = this.getFieldValue.bind(this);
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            switch (this.currentPlayerSymbol) {
                case 'x':
                    this.currentPlayerSymbol = 'o';
                    break;
                case 'o':
                    this.currentPlayerSymbol = 'x';
                    break;
            }
        }
    }

    isFinished() {
        if (this.isDraw() === true) return true;
        if (this.getWinner() !== null) return true;
        return false;
    }

    getWinner() {
        if (((this.matrix[0][0] === this.matrix[0][1]) && (this.matrix[0][0] === this.matrix[0][2]) && this.matrix[0][0] !== null) ||
            ((this.matrix[1][0] === this.matrix[1][1]) && (this.matrix[1][0] === this.matrix[1][2]) && this.matrix[1][0] !== null) ||
            ((this.matrix[2][0] === this.matrix[2][1]) && (this.matrix[2][0] === this.matrix[2][2]) && this.matrix[2][0] !== null) ||
            ((this.matrix[0][0] === this.matrix[1][0]) && (this.matrix[0][0] === this.matrix[2][0]) && this.matrix[0][0] !== null) ||
            ((this.matrix[0][1] === this.matrix[1][1]) && (this.matrix[0][1] === this.matrix[2][1]) && this.matrix[0][1] !== null) ||
            ((this.matrix[0][2] === this.matrix[1][2]) && (this.matrix[0][2] === this.matrix[2][2]) && this.matrix[0][2] !== null) ||
            ((this.matrix[0][0] === this.matrix[1][1]) && (this.matrix[0][0] === this.matrix[2][2]) && this.matrix[0][0] !== null) ||
            ((this.matrix[0][2] === this.matrix[1][1]) && (this.matrix[0][2] === this.matrix[2][0]) && this.matrix[0][2] !== null)) {
                switch (this.currentPlayerSymbol) {
                    case 'x':
                        return 'o';
                    case 'o':
                        return 'x';
                }
            } else {
                return null;
            }
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] === null) return false; 
            }
        }
        return true;
    }

    isDraw() {
        if ((this.getWinner() === null) && (this.noMoreTurns() === true)) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
