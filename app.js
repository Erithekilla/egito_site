let points = 0;
let bnt1 = document.getElementById('bnt1')
let bnt2 = document.getElementById('bnt2')
let bnt3 = document.getElementById('bnt3')
let bnt4 = document.getElementById('bnt4')
const acerto = 2

const ganharPoints = ()=>{
    points = points + 20;
    alert(`Você acertou, tem agora ${points}`)
}

const error = ()=>{
    alert("Você errou, tente novamente.")
}

const resposta = (botaoClicado)=>{
    if(botaoClicado == acerto){
        ganharPoints()
    } else {
        error()
    }
}

bnt1.addEventListener('click',()=>{resposta(1)})
bnt2.addEventListener('click',()=>{resposta(2)})
bnt3.addEventListener('click',()=>{resposta(3)})
bnt4.addEventListener('click',()=>{resposta(4)})

//pessoa que faz programa :D