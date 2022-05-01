const jogo_de_cartas = {
    baralho: {
        naipes: ['paus', 'copas', 'espadas', 'ouro'],
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    elemento_container: '',
    cartas_banca: [],
    cartas_jogador: [],
    fim_de_jogo: false,
    quantidade_banca: 0,
    quantidade_jogador: 0,
    quantidade_iguais: 0,

    iniciar: function (container) {
        this.elemento_container = container;
    },

    sortear_carta: function () {
        let sorteio_numero_naipe = Math.floor(Math.random() * (3));
        let sorteio_numero_numeros = Math.floor(Math.random() * (12));

        let carta = {
            naipe: [this.baralho.naipes[sorteio_numero_naipe]],
            numero: [this.baralho.numeros[sorteio_numero_numeros]]
        }
        return carta;
    },

    comparar_vetores: function (vetor, vetor2) {
        for (i in vetor) {
            if (vetor[i] > vetor2[i]) {
                this.quantidade_banca++;
            } else if (vetor[i] < vetor2[i]) {
                this.quantidade_jogador++;
            } else {
                this.quantidade_iguais++;
            }
        }
    },

    jogar: function () {
        let content = '';

        if (this.fim_de_jogo == false) {
            this.elemento_container.innerHTML = '';
            if (this.cartas_banca.length < 11) {

                let carta1 = this.sortear_carta();
                let carta2 = this.sortear_carta();

                this.cartas_banca.push(carta1.numero);
                this.cartas_jogador.push(carta2.numero);

                content += `Carta da banca: ${carta1.numero} de ${carta1.naipe}<br>`;
                content += `Sua carta: ${carta2.numero} de ${carta2.naipe}`;

                this.elemento_container.innerHTML = content;

            } if (this.cartas_banca.length == 10) {
                this.fim_de_jogo = true;
            }

        } else if (this.fim_de_jogo == true) {

            if (this.cartas_banca.length == 10) {

                content += `Cartas da banca: ${this.cartas_banca}<br>`;
                content += `Suas cartas: ${this.cartas_jogador}<br>`;

                this.comparar_vetores(this.cartas_banca, this.cartas_jogador);

                content += `A banca fez ${this.quantidade_banca} pontos.<br>`
                content += `Você fez ${this.quantidade_jogador} pontos.<br>`
                
                if (this.quantidade_iguais > 0) {
                    if (this.quantidade_iguais == 1) {
                        content += `${this.quantidade_iguais} jogada foi empate<br>`
                    } else {
                        content += `${this.quantidade_iguais} jogadas foram empate<br>`
                    }
                }

                this.elemento_container.innerHTML = content;

                this.fim_de_jogo = 'acabou'

            }

        }


    },

    start: function () {
        this.fim_de_jogo = false;
    }
};
