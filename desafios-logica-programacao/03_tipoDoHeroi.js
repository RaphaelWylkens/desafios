class Heroi {
    constructor(idade, nome, tipo) {
        this.idade = idade
        this.nome = nome
        this.tipo = tipo
    }

    atacar() {
        const ataques = {
            mago: "Magia",
            guerreiro: "Espada",
            bardo: "Acorde Discordante",
            clerigo: "Luz Sagrada"
        }
        const ataque = ataques[this.tipo]

        if (!ataque){
            console.log("Héroi não reconehcido")
        }

        console.log(`o heroi ${this.nome} do tipo ${this.tipo} atacou usando ${ataque} e derrotou 2 goblins`)
    }
}

let heroiMago = new Heroi(24, "Raphael", "mago")
heroiMago.atacar()

let heroiGuerreiro = new Heroi(24, "Pedro", "guerreiro")
heroiGuerreiro.atacar()

let heroiBardo = new Heroi(24, "Léo Santana", "bardo")
heroiBardo.atacar()

let heroiClerigo = new Heroi(24, "Jackeson", "clerigo")
heroiClerigo.atacar()
