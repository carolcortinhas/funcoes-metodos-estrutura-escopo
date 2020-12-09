// Funções e métodos

// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média

const alunosDaTurmaA = [
    { 
        name: 'Maik',
        nota: 9.8
    },
    { 
        name: 'Diego',
        nota: 10
    },
    { 
        name: 'Fulano',
        nota: 2
    },
]

const alunosDaTurmaB = [
    { 
        name: 'Aline',
        nota: 8.9
    },
    { 
        name: 'Andreia',
        nota: 10
    },
    { 
        name: 'Giu',
        nota: 2
    },
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    // Se a media for maior que 5, parabenizar a turma
    if(media>5){
        console.log(`A média da turma ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')