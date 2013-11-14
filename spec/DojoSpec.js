describe('Boneco', function () {
	var cenario = new Cenario();
	cenario.init();

	var michaelJackson = new Explorer(cenario.matrix);

	beforeEach(function () {

	});

	it('espero que haja uma matriz 5 x 5', function () {
		expect( cenario.matrix.length ).toBe(5);
		expect( cenario.matrix[4].length ).toBe(5);
	});

	it('espero o indice 3x3 da matriz seja = 1', function () {
		expect( cenario.matrix[3][3] ).toBe(1);
	});

	it('espero que o metodo find encontre a linha e a coluna o valor = 1', function () {
		var answer = michaelJackson.find();
		
		expect( answer.linha ).toBe(3);
		expect( answer.coluna ).toBe(3);
	})

	
	afterEach(function () {

	});
});