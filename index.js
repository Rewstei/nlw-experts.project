// Variavel, armazenando valores onde fica as perguntas e respostas
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilizar páginas da web",
        "Uma linguagem de programação para criar conteúdo gráfico",
        "Uma linguagem de programação para tornar páginas da web interativas",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem na tela",
        "Realizar uma operação matemática",
        "Imprimir valores no console do navegador",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variável myVar = 10;",
        "let myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de comparação para verificar igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove um elemento do final do array",
        "Adiciona um elemento no início do array",
        "Adiciona um elemento ao final do array",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      respostas: [
        "Realiza uma operação de soma",
        "Verifica se pelo menos uma condição é verdadeira",
        "Verifica se todas as condições são verdadeiras",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar múltiplos elementos do DOM",
        "Selecionar um elemento do DOM baseado em sua classe",
        "Selecionar um elemento do DOM baseado em seu ID",
      ],
      correta: 3
    },
    {
      pergunta: "Como você inicia um comentário de uma única linha em JavaScript?",
      respostas: [
        "//",
        "<!--",
        "/*",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '+' em JavaScript?",
      respostas: [
        "Concatenar strings",
        "Subtrair números",
        "Multiplicar números",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Arredonda um número para o inteiro mais próximo",
        "Formata um número com um número específico de casas decimais",
        "Retorna o maior número de um array",
      ],
      correta: 2
    },
  ];
  
  // pegar um elemento especifico
  const quiz = document.querySelector('#quiz')
  
  // acessar o template e armazenar na variavel
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
  
    // Clona o template para as perguntas
    const quizItem = template.content.cloneNode(true)
  
    // pega o template clonado e acessa a pergunta
    quizItem.querySelector('h3').textContent = item.pergunta
  
   // cria um novo loop para criar as respostas
    for(let resposta of item.respostas) {
      // acessa o quizItem de dl e clona
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // mudando o conteudo do dt spam
      dt.querySelector('span').textContent = resposta
      
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  
      //pega o index da resposta
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
       // verifica a resposta se é correta
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // colocando as respostas na tela
      quizItem.querySelector('dl').appendChild(dt) 
    }
  // remove a primeira resposta e remove
  quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }