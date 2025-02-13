console.log("Oi gente")

localStorage.setItem("nome", "Guilherme")
let nome = localStorage.getItem("nome")
console.log("nome", nome)

localStorage.setItem("idade1", 23)
let idade = localStorage.getItem("idade1")
console.log("idade", idade)

let usuario =
{
    nome: "Jose",
    idade: 23,
    email: "ana@.com"
}
console.log(usuario)

console.log("%cIsso é um texto estilizado!", "color: white; background: blue; padding: 5px; font-size: 16px; border-radius: 5px;");

console.table([
    { Nome: "Eric", Idade: 25 },
    { Nome: "Bob", Idade: 30 }
]);

console.log("%cInfo:", "color: blue; font-weight: bold;", "Isso é apenas uma informação.");
console.warn("%cAtenção!", "color: orange; font-weight: bold;", "Cuidado com essa ação!");
console.error("%cErro!", "color: red; font-weight: bold;", "Algo deu errado...");
console.info("%cDica:", "color: green; font-weight: bold;", "Use isso para melhorar seu código!");

console.time("Meu Timer");
setTimeout(() => {
    console.timeEnd("Meu Timer");
}, 1000);

const textElement = document.querySelector(".wave-text");
const text = textElement.innerText;
textElement.innerHTML = text.split("").map((char, i) => `<span>${char}</span>`).join("");

let hue = 0;
function animateText() {
    const letters = textElement.querySelectorAll("span");
    letters.forEach((letter, index) => {
        const color = `hsl(${(hue + index * 20) % 360}, 100%, 50%)`;
        letter.style.color = color;
    });
    hue += 5;
}
setInterval(animateText, 100);


let txtUsuario = `{
    "nome": "Juliano",
    "idade": 27,
    "email": "jeba@a.com"
}`;

let objtUsuario = JSON.parse(txtUsuario);
console.log("Objeto:", objtUsuario);

localStorage.setItem("usuario1", JSON.stringify(objtUsuario));

let user = JSON.parse(localStorage.getItem("usuario1"));
console.log("usuario1:", user);