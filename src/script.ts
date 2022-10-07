import PromptSync = require ('prompt-sync');
const prompt = PromptSync();

const IMC = (Peso: number, Altura: number) =>{
    return Peso / Math.pow(Altura, 2)};
console.log(`Digite seu peso: `)
const Peso = Number(prompt(''));

console.log(`Digite sua altura: `)
const Altura = Number(prompt(''));

const imcResult = IMC(Peso, Altura);
console.log(`O seu imc é: ${imcResult}`);