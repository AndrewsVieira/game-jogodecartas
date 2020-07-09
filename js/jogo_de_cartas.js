const jogo_de_cartas = {
    baralho: {
        naipes: ['paus', 'copas', 'espadas', 'ouro'],
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },

    sortear_carta: function () {
        let sorteio_numero_naipe = Math.floor(Math.random()*(3));
        let sorteio_numero_numeros = Math.floor(Math.random()*(12));

        let carta = this.baralho.naipes[sorteio_numero_naipe] + this.baralho.numeros[sorteio_numero_numeros];

        return carta;
    },

    desenhar: function () {
        let carta1 = this.sortear_carta();
        let carta2 = this.sortear_carta();

        console.log('Carta 1: ' + carta1);
        console.log('Carta 2: ' + carta2);
    }
};
