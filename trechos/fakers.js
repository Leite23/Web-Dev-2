import emails from "./email.js"
import nomes from "./nomes.js"
import sobrenomes from "./sobrenomes.js"

function rg() {
    return Math.random().toString().slice(3, 12)
}

function nomeFake() {
    let idx = parseInt(Math.random() * nomes.lenght)
    return nomes[idx]
}

function sobrenomeFake() {
    let idx = parseInt(Math.random() * sobrenomes.lenght)
    return nomes[idx]
}

function emailFake() {
    let idx = parseInt(Math.random() * emails.lenght)
    return nomes[idx]
}

export { emails, nomeFake, rg, sobrenomeFake, emailFake }