describe('Boneco', function () {
	var cenario = new Cenario();
	cenario.init();

	var michaelJackson = new Explorer(cenario.matrix);

	beforeEach(function () {
		cenario.generateMatrix();
	});

	it('espero que haja uma matriz com o tamanho certo', function () {
		
		expect( cenario.matrix.length ).toBe(cenario.lines);
		expect( cenario.matrix[0].length ).toBe(cenario.columns);
	});

	it('espero que o indice da matriz seja = 1 no ponto inserido', function () {
		var keyPlace = cenario.insertKey();
		expect(cenario.matrix[keyPlace.line][keyPlace.column]).toBe(1);
	});

	it('espero que a matriz seja destruida quando eu quiser', function () {
		cenario.destroyMatrix();
		expect(cenario.matrix.length).toBe(0);

	});

	it('espero que o metodo find encontre a linha e a coluna o valor = 1', function () {
 		var answer = michaelJackson.find();
 		var position = cenario.insertKey(); 
 		console.log(answer)
		console.log(position)
	 	expect( answer.line ).toBe(position.line);
	 	expect( answer.column ).toBe(position.column);
	 })

	
	afterEach(function () {
		cenario.destroyMatrix();
	});
});