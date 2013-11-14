var Cenario = function () {
	this.init();


};

Cenario.prototype.matrix = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0]
];

Cenario.prototype.init = function () {
	this.generateMatrix();
	var explorer = new Explorer(this.matrix);

};

Cenario.prototype.generateMatrix = function () {
	for (var linha = 0; linha < 5; linha += 1) {
		for (var coluna = 0; coluna < 5; coluna += 1){
			if (coluna == 3 && linha == 3) {
				this.matrix[linha][coluna] = 1;
			}
		}
	}
};


var Explorer = function (matrix) {
	this.init(matrix);
};

Explorer.prototype.init = function(matrix){
	this.matrix = matrix;
	this.find();
};

Explorer.prototype.find = function () {
	for (var linha = 0, len = this.matrix.length; linha < len; linha ++) {
		for (var coluna = 0, linhaLen = this.matrix[linha].length; coluna < linhaLen; coluna++) {
			if (this.matrix[linha][coluna] === 1) {
				return {linha: linha, coluna: coluna};
			} else {
				return {linha: null, coluna: null};
			}
		}
	}
};