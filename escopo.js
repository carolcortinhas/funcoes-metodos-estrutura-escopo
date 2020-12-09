// const alunosDaTurmaB = [
//     { 
//         name: 'Aline',
//         nota: 4
//     },
//     { 
//         name: 'Andreia',
//         nota: 3
//     },
//     { 
//         name: 'Giu',
//         nota: 2
//     },
//     {
//         name: 'Camila',
//         nota: 1
//     }
// ]

const alunosDaTurmaA = [
    { 
        name: 'Maik',
        nota: 3
    },
    { 
        name: 'Diego',
        nota: 10
    },
    { 
        name: 'Fulano',
        nota: 2
    },
    { 
        name: 'Josy',
        nota: 10
    }
]

function calculaMedia(alunos){
    let soma = 0;
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length

    alunos[0].bla = "alo"
    return media

}

const media1 = calculaMedia(alunosDaTurmaA)

console.log(alunosDaTurmaA)

//const media2 = calculaMedia(alunosDaTurmaA)

// function enviaMensagem(media, turma){
//     // Se a media for maior que 5, parabenizar a turma
//     if(media > 5){
//         console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
//     } else {
//         console.log(`A média da turma ${turma} é menor que 5`)
//     }
// }

// enviaMensagem(media1, 'turma A')
// enviaMensagem(media2, 'turma B')