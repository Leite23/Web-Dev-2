import { rg, nomeFake, sobrenomeFake, emailFake } from "./fakers.js"

export default function createUser()
{   
    let firstName = nomeFake()
    let obj = {
        firstName: nomeFake(),
        lastName: sobrenomeFake(),
        rg: rg(),
        email: emailfake(firstName)
    }
    return obj
}