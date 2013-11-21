var Cenario = function () {
	this.init();

};

Cenario.prototype.init = function () {
	this.matrix = [];
	this.lines  = Math.round(Math.random()*10) + 1;
	this.columns = Math.round(Math.random()*10) + 1;

	console.log(this.matrix);
	var explorer = new Explorer(this.matrix);
};

Cenario.prototype.generateMatrix = function () {
	var i,
		j;

	for (i = 0; i < this.lines; i++) {
		this.matrix.push([]);
		for (j = 0; j < this.columns; j++){
			this.matrix[i].push(0);
		}
	}
};

Cenario.prototype.insertKey = function () {
	var line  = Math.round(Math.random() * this.lines),
		column = Math.round(Math.random() * this.columns);

	this.matrix[line][column] = 1;

	return {
		line: line,
		column: column
	}
};

Cenario.prototype.destroyMatrix = function() {
	this.matrix = [];
};

var Explorer = function (matrix) {
	this.init(matrix);
};

Explorer.prototype.init = function(matrix){
	this.matrix = matrix;
	this.find();
};

Explorer.prototype.find = function () {
	for (var line = 0, len = this.matrix.length; line < len; line ++) {
		for (var column = 0, linhaLen = this.matrix[line].length; column < linhaLen; column++) {
			if (this.matrix[line][column] === 1) {
				return {
					line: line,
					column: column
				}
			}
		}
	}
};