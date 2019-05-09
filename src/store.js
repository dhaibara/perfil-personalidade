const questions = [
  {
    id: 1,
    question: "Eu sou:",
    options: [
      { answer: "Idealista, criativo e visionário", value: "I" },
      { answer: "Divertido, espiritual e benéfico", value: "C" },
      { answer: "Confiável, minucioso e previsível", value: "O" },
      { answer: "Focado, determinado e persistente", value: "A" }
    ]
  },
  {
    id: 2,
    question: "Eu gosto de:",
    options: [
      { answer: "Ser piloto", value: "A" },
      { answer: "Conversar com os passageiros", value: "C" },
      { answer: "Planejar a viagem", value: "O" },
      { answer: "Explorar novas rotas", value: "I" }
    ]
  },
  {
    id: 3,
    question: "Quem quiser se dar bem comigo:",
    options: [
      { answer: "Me dê liberdade", value: "I" },
      { answer: "Me deixe saber suas expectativas", value: "O" },
      { answer: "Lidere, siga ou saia do caminho", value: "A" },
      { answer: "Seja amigável, carinhoso e compreensivo", value: "C" }
    ]
  },
  {
    id: 4,
    question: "Para bons resultados é preciso:",
    options: [
      { answer: "Ter incertezas", value: "I" },
      { answer: "Controlar o essencial", value: "O" },
      { answer: "Diversão e celebração", value: "C" },
      { answer: "Planejar e obter resultados", value: "A" }
    ]
  },
  {
    id: 5,
    question: "Eu me divirto quando:",
    options: [
      { answer: "Estou me exercitando", value: "A" },
      { answer: "Tenho novidades", value: "I" },
      { answer: "Estou com os outros", value: "C" },
      { answer: "Determino as regras", value: "O" }
    ]
  },
  {
    id: 6,
    question: "Eu penso que:",
    options: [
      { answer: "Unidos venceremos, divididos perderemos", value: "C" },
      { answer: "O ataque é melhor que a defesa", value: "A" },
      { answer: "É bom ser manso, mas tenha um porrete", value: "I" },
      { answer: "Um homem prevenido vale por dois", value: "O" }
    ]
  },
  {
    id: 7,
    question: "Minha preocupação é:",
    options: [
      { answer: "Gerar a ideia global", value: "I" },
      { answer: "Fazer com que as pessoas gostem", value: "C" },
      { answer: "Fazer com que funcione", value: "O" },
      { answer: "Fazer a tarefa", value: "A" }
    ]
  },
  {
    id: 8,
    question: "Eu prefiro:",
    options: [
      { answer: "Perguntar do que responder", value: "I" },
      { answer: "Ter todos os detalhes", value: "O" },
      { answer: "Ter vantagens a meu favor", value: "A" },
      { answer: "Que todos tenham a chance de ser ouvido", value: "C" }
    ]
  },
  {
    id: 9,
    question: "Eu gosto de:",
    options: [
      { answer: "Fazer progresso", value: "A" },
      { answer: "Construir memórias", value: "C" },
      { answer: "Fazer sentido", value: "O" },
      { answer: "Tornar as pessoas confortáveis", value: "I" }
    ]
  },
  {
    id: 10,
    question: "Eu gosto de chegar:",
    options: [
      { answer: "Na frente", value: "A" },
      { answer: "Junto", value: "C" },
      { answer: "Na hora", value: "O" },
      { answer: "Em outro lugar", value: "I" }
    ]
  },
  {
    id: 11,
    question: "Um ótimo dia para mim é quando:",
    options: [
      { answer: "Consigo fazer muitas coisas", value: "A" },
      { answer: "Me divirto com meus amigos", value: "C" },
      { answer: "Tudo segue conforme planejado", value: "O" },
      { answer: "Desfruto de coisas novas e estimulantes", value: "I" }
    ]
  },
  {
    id: 12,
    question: "Eu vejo a morte como:",
    options: [
      { answer: "Uma grande aventura misteriosa", value: "I" },
      { answer: "Oportunidade para rever pessoas queridas", value: "C" },
      { answer: "Um modo de receber recompensas", value: "O" },
      { answer: "Algo que sempre chega muito cedo", value: "A" }
    ]
  },
  {
    id: 13,
    question: "Minha filosofia de vida é:",
    options: [
      { answer: "Sou um ganhador. Mas há perdedores", value: "A" },
      { answer: "Para eu ganhar, ninguém precisa perder", value: "C" },
      { answer: "Para ganhar é preciso seguir regras", value: "O" },
      { answer: "Para ganhar é necessário inventar novas regras", value: "I" }
    ]
  },
  {
    id: 14,
    question: "Eu sempre gostei de:",
    options: [
      { answer: "Explorar novas ideias", value: "I" },
      { answer: "Evitar surpresas", value: "O" },
      { answer: "Focalizar a meta", value: "A" },
      { answer: "Realizar uma abordagem natural", value: "C" }
    ]
  },
  {
    id: 15,
    question: "Eu gosto de mudanças se:",
    options: [
      { answer: "Me der uma vantagem competitiva", value: "A" },
      { answer: "For divertido e puder ser compartilhado", value: "C" },
      { answer: "Me dar mais liberdade e variedade", value: "I" },
      { answer: "Melhorar ou me der mais controle", value: "O" }
    ]
  },
  {
    id: 16,
    question: "Não existe nada de errado em:",
    options: [
      { answer: "Se colocar na frente", value: "A" },
      { answer: "Colocar os outros na frente", value: "C" },
      { answer: "Mudar de ideia", value: "I" },
      { answer: "Ser consistente", value: "O" }
    ]
  },
  {
    id: 17,
    question: "Busco conselhos em:",
    options: [
      { answer: "Pessoas bem-sucedidas", value: "A" },
      { answer: "Anciões e conselheiros", value: "C" },
      { answer: "Autoridades no assunto", value: "O" },
      { answer: "Outros lugares, os mais estranhos", value: "I" }
    ]
  },
  {
    id: 18,
    question: "Meu lema é:",
    options: [
      { answer: "Fazer o que precisa ser feito", value: "I" },
      { answer: "Fazer bem feito", value: "O" },
      { answer: "Fazer junto com o grupo", value: "C" },
      { answer: "Simplesmente fazer", value: "A" }
    ]
  },
  {
    id: 19,
    question: "Eu gosto de:",
    options: [
      { answer: "Complexidade, mesmo se confuso", value: "I" },
      { answer: "Ordem e sistematização", value: "O" },
      { answer: "Calor humano e animação", value: "C" },
      { answer: "Coisas claras e simples", value: "A" }
    ]
  },
  {
    id: 20,
    question: "Tempo para mim é:",
    options: [
      { answer: "Algo que detesto desperdiçar", value: "A" },
      { answer: "Um grande período", value: "C" },
      { answer: "Uma flecha que leva ao inevitável", value: "O" },
      { answer: "Irrelevante", value: "I" }
    ]
  },
  {
    id: 21,
    question: "Se eu fosse bilionário:",
    options: [
      { answer: "Faria doações para muitas entidades", value: "C" },
      { answer: "Criaria uma poupança avantajada", value: "O" },
      { answer: "Faria o que desse na cabeça", value: "I" },
      { answer: "Exibiria bastante com algumas pessoas", value: "A" }
    ]
  },
  {
    id: 22,
    question: "Eu acredito que:",
    options: [
      { answer: "O destino é mais importante que a caminhada", value: "A" },
      { answer: "A caminhada é mais importante que o destino", value: "C" },
      { answer: "Um centavo economizado é um centavo ganho", value: "O" },
      { answer: "Bastam um navio e uma estrela para navegar", value: "I" }
    ]
  },
  {
    id: 23,
    question: "Eu acredito também que:",
    options: [
      { answer: "Aquele que hesita está perdido", value: "A" },
      { answer: "De grão em grão a galinha enche o papo", value: "O" },
      { answer: "O que vai, volta", value: "C" },
      { answer: "O cego não diferencia sorriso nem careta", value: "I" }
    ]
  },
  {
    id: 24,
    question: "Eu acredito ainda que:",
    options: [
      { answer: "É melhor prudência do que arrependimento", value: "O" },
      { answer: "A autoridade deve ser desafiada", value: "I" },
      { answer: "Ganhar é fundamental", value: "A" },
      { answer: "O coletivo é mais importante do que o individual", value: "C" }
    ]
  },
  {
    id: 25,
    question: "Eu penso que:",
    options: [
      { answer: "Não é fácil ficar encurralado", value: "I" },
      { answer: "É preferível olhar, antes de pular", value: "O" },
      { answer: "Duas cabeças pensam melhor do que uma", value: "C" },
      { answer: "Se não sabe competir, fique em casa", value: "A" }
    ]
  }
];

const profiles = [
  {
    perfis: [
      { id: 1, valor: "Águia(I)" },
      { id: 2, valor: "Lobo(O)" },
      { id: 3, valor: "Gato(C)" },
      { id: 4, valor: "Tubarão(A)" }
    ],
    pontosFortes: [
      {
        id: 1,
        lista: [
          { id: 1, valor: "Provocar mudanças" },
          { id: 2, valor: "Criativo" },
          { id: 3, valor: "Antecipa o futuro" },
          { id: 4, valor: "Inspirador" }
        ]
      },
      {
        id: 2,
        lista: [
          { id: 1, valor: "Passado, presente, futuro" },
          { id: 2, valor: "Consciente" },
          { id: 3, valor: "Segurança" },
          { id: 4, valor: "Responsável" }
        ]
      },
      {
        id: 3,
        lista: [
          { id: 1, valor: "Harmonioso" },
          { id: 2, valor: "Comunicativo" },
          { id: 3, valor: "Se relaciona com todos" }
        ]
      },
      {
        id: 4,
        lista: [
          { id: 1, valor: "Faz acontecer" },
          { id: 2, valor: "Para com a burocracia" },
          { id: 3, valor: "Motivado" },
          { id: 4, valor: "Tem atitude" }
        ]
      }
    ],
    melhorias: [
      {
        id: 1,
        lista: [
          { id: 1, valor: "Falta de atenção" },
          { id: 2, valor: "Impaciente" },
          { id: 3, valor: "Rebelde" },
          { id: 4, valor: "Não tolera ser controlado" }
        ]
      },
      {
        id: 2,
        lista: [
          { id: 1, valor: "Adaptar a mudança" },
          { id: 2, valor: "Muito detalhista" },
          { id: 3, valor: "Não experimenta o novo" }
        ]
      },
      {
        id: 3,
        lista: [
          { id: 1, valor: "Esconde conflitos" },
          { id: 2, valor: "Felicidade acima dos resultados" },
          { id: 3, valor: "Manipulação pelos sentimentos" }
        ]
      },
      {
        id: 4,
        lista: [
          { id: 1, valor: "Socialmente um desastre" },
          { id: 2, valor: "Resultado acima de tudo" }
        ]
      }
    ],
    motivacoes: [
      {
        id: 1,
        lista: [
          { id: 1, valor: "Liberdade de expressão" },
          { id: 2, valor: "Ausência de controles rígidos" },
          { id: 3, valor: "Ambiente descentralizado" },
          { id: 4, valor: "Liberdade para exceções" },
          { id: 5, valor: "Oportunidade para delegar tarefas" }
        ]
      },
      {
        id: 2,
        lista: [
          { id: 1, valor: "Regras claras e objetivas" },
          { id: 2, valor: "Conhecimento do trabalho" },
          { id: 3, valor: "Ausência de riscos" },
          { id: 4, valor: "Ver o começo, meio e fim" }
        ]
      },
      {
        id: 3,
        lista: [
          { id: 1, valor: "Aceitação social" },
          { id: 2, valor: "Construir consenso" },
          { id: 3, valor: "Ambiente harmonico" },
          { id: 4, valor: "Trabalho em grupo" }
        ]
      },
      {
        id: 4,
        lista: [
          { id: 1, valor: "Liberdade para agir sozinho" },
          { id: 2, valor: "Controle de suas atividades" },
          { id: 3, valor: "Não ter que repetir tarefa" },
          { id: 4, valor: "Competição" }
        ]
      }
    ]
  }
];

// const profiles = [
//   {
//     id: 1,
//     image: "../assets/aguia.jpg",
//     title: "Águia(I)",
//     slogan: "Fazer diferente",
//     table: [
//       {
//         id: 1,
//         cols: [
//           "Provocar mudanças",
//           "Falta de atenção",
//           "Liberdade de expressão"
//         ]
//       },
//       {
//         id: 2,
//         cols: ["Criativo", "Impaciente", "Ausência de controles rígidos"]
//       },
//       {
//         id: 3,
//         cols: ["Antecipa o futuro", "Rebelde", "Ambiente descentralizado"]
//       },
//       {
//         id: 4,
//         cols: [
//           "Inspirador",
//           "Não tolera ser controlado",
//           "Liberdade para exceções"
//         ]
//       },
//       {
//         id: 5,
//         cols: ["", "", "Oportunidade para delegar tarefas"]
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: "Lobo(O)",
//     slogan: "Fazer certo",
//     table: [
//       {
//         id: 1,
//         cols: [
//           "Passado, presente, futuro",
//           "Adaptar a mudança",
//           "Regras claras e objetivas"
//         ]
//       },
//       {
//         id: 2,
//         cols: ["Consciente", "Muito detalhista", "Conhecimento do trabalho"]
//       },
//       {
//         id: 3,
//         cols: ["Segurança", "Não experimenta o novo", "Ausência de riscos"]
//       },
//       {
//         id: 4,
//         cols: ["Responsável", "", "Ver o começo, meio e fim"]
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: "Gato(C)",
//     slogan: "Fazer junto",
//     table: [
//       {
//         id: 1,
//         cols: ["Harmonioso", "Esconde conflitos", "Aceitação social"]
//       },
//       {
//         id: 2,
//         cols: [
//           "Comunicativo",
//           "Felicidade acima dos resultados",
//           "Construir consenso"
//         ]
//       },
//       {
//         id: 3,
//         cols: [
//           "Se relaciona com todos",
//           "Manipulação pelos sentimentos",
//           "Ambiente harmonico"
//         ]
//       },
//       {
//         id: 4,
//         cols: ["", "", "Trabalho em grupo"]
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: "Tubarão(A)",
//     slogan: "Fazer rápido",
//     table: [
//       {
//         id: 1,
//         cols: [
//           "Faz acontecer",
//           "Socialmente um desastre",
//           "Liberdade para agir sozinho"
//         ]
//       },
//       {
//         id: 2,
//         cols: [
//           "Para com a burocracia",
//           "Resultado acima de tudo",
//           "Controle de suas atividades"
//         ]
//       },
//       {
//         id: 3,
//         cols: ["Motivado", "", "Não ter que repetir tarefa"]
//       },
//       {
//         id: 4,
//         cols: ["Tem atitude", "", "Competição"]
//       }
//     ]
//   }
// ];

export { questions, profiles };
