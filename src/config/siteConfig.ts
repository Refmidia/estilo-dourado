// =====================================================
// CONFIGURAÇÕES EDITÁVEIS DO SITE
// Altere os valores abaixo para personalizar o conteúdo
// =====================================================

export const siteConfig = {
  // Links principais
  whatsappLink: "https://wa.me/819012385981", // Número do Japão
  lineLink: "https://line.me/ti/p/rv8Kqbfx5n",
  checkoutLink: "#oferta", // Link do checkout/pagamento
  instagramLink: "https://www.instagram.com/fabricadeestiloo/",
  contactPhone: "090 1238 5981",

  // Meta (Facebook/Instagram)
  metaPixelId: "950293184115519",
  // CAPI: se null, o frontend usa a mesma origem (window.location.origin + '/api/conversion')
  capiEndpoint: null as string | null,

  // Informações da escola
  schoolName: "Fábrica de Estilo",
  schoolTagline: "100% Dinâmico com diversos alunos formados no Japão 🇯🇵 e no Brasil 🇧🇷",
  
  // Estatísticas
  stats: {
    studentsGraduated: "100+",
    studentsGraduatedText: "Alunos formados no Japão",
    instagramFollowers: "500 mil+",
    jobsCompleted: "5.000+",
    jobsCompletedText: "Trabalhos realizados no 🇯🇵",
    googleMapsRank: "1ª opção na pesquisa Google Maps por barbearia em Aichi-ken",
  },

  // Por que fazer o curso
  whyChooseUs: [
    "1ª opção na pesquisa Google Maps por barbearia em Aichi-ken!",
    "No Instagram já somamos mais de 500 mil seguidores no @fabricadeestiloo",
    "Credibilidade com nosso público",
    "Plano de carreira com nossos alunos",
    "Estágio",
    "Possibilidade de franquia",
    "Estrutura para nossos alunos e clientes",
  ],

  // Preços
  pricing: {
    professional: {
      title: "BARBEARIA PROFISSIONAL",
      hours: "100 hrs",
      price: "400.000",
      currency: "¥",
    },
    vip: {
      title: "CURSO VIP",
      hours: "100 hrs",
      price: "450.000",
      currency: "¥",
    },
  },

  // Formas de pagamento
  paymentMethods: [
    "Cartão de Crédito",
    "Financiamento Próprio (mediante a contrato)",
    "PIX no Brasil",
    "À Vista",
  ],

  // Professor
  professor: {
    name: "Professores Japoneses e Brasileiro",
    title: "Instrutores Certificados",
    description: `Aprenda com professores japoneses e brasileiros especializados, 
    com experiência comprovada no mercado japonês e brasileiro. 
    Metodologia única que combina técnicas tradicionais japonesas com o estilo brasileiro moderno.`,
    achievements: [
      "Professores certificados e experientes",
      "Metodologia única Japão-Brasil",
      "Mais de 100 alunos formados no Japão",
      "Experiência prática no mercado japonês",
    ],
  },

  // Módulos do curso
  modules: [
    {
      number: "01",
      title: "Introdução",
      topics: [
        "O Barbeiro e a Barbearia",
        "História da Barbearia",
        "Como Ser Barbeiro de sucesso",
        "Biossegurança",
      ],
    },
    {
      number: "02",
      title: "Operacional da Barbearia",
      topics: [
        "Marketing",
        "Gestão",
        "PROVA TEÓRICA e PRÁTICA",
      ],
    },
    {
      number: "03",
      title: "Ferramentas de Barbeiro (Kit Profissional Incluso)",
      topics: [
        "3 Máquinas",
        "2 Tesouras",
        "Navalhete",
        "Limpador e escova modeladora",
        "Pente de corte",
      ],
    },
    {
      number: "04",
      title: "Técnicas de Corte",
      topics: [
        "Social (Clássico, Moderno e na Tesoura)",
        "Fade / Low Fade",
        "Mid Fade",
        "High Fade",
        "Taper Fade",
        "To Land De cima para baixo",
        "To SKY De Baixo para cima",
      ],
    },
    {
      number: "05",
      title: "Freestyle",
      topics: [
        "Básico",
        "Avançado",
      ],
    },
    {
      number: "06",
      title: "Técnicas de Barba",
      topics: [
        "Barba lenhadora",
        "Barba por fazer",
      ],
    },
    {
      number: "07",
      title: "Barba Terapia",
      topics: [
        "Diagnóstico e Preparação - Avaliação da pele e da barba + higienização",
        "Esfoliação (opcional, mas recomendada) - Remove células mortas, desobstrui os poros",
        "Toalha Quente - Aplicação de toalha quente para abrir os poros e amaciar os fios",
        "Aplicação do Produto de Barbear - Creme, gel ou óleo de barbear adequado",
        "Barbeamento / Desenho da Barba - Execução do barbear ou contorno com técnica",
        "Finalização Terapêutica - Toalha fria para fechar os poros + balm ou óleo calmante",
      ],
    },
    {
      number: "08",
      title: "Química",
      topics: [
        "Luzes",
        "Pigmentação capilar e barba",
      ],
    },
    {
      number: "09",
      title: "Técnicas de Corte Asiático",
      topics: [
        "Corte e Pama",
      ],
    },
    {
      number: "10",
      title: "Conclusão do Curso",
      topics: [
        "Diploma com carterinha profissional emitida pela Federação @ FEPCSSP",
        "Escola de Barbeiros e Cabeleireiros do Estado de SP",
        "Diploma válido em mais de 138 países",
      ],
    },
  ],

  // Bônus
  bonuses: [
    {
      title: "Kit Profissional Incluso",
      description: "3 Máquinas, 2 Tesouras, Navalhete, Limpador, Escova modeladora e Pente de corte",
      value: "Incluso",
    },
    {
      title: "Estágio",
      description: "Oportunidade de estágio prático para aplicar o conhecimento",
      value: "Incluso",
    },
    {
      title: "Plano de Carreira",
      description: "Acompanhamento e orientação para desenvolvimento profissional",
      value: "Incluso",
    },
    {
      title: "Possibilidade de Franquia",
      description: "Oportunidade de expandir com modelo de franquia",
      value: "Incluso",
    },
    {
      title: "Diploma Profissional",
      description: "Diploma com carterinha profissional emitida pela FEPCSSP, válido em mais de 138 países",
      value: "Incluso",
    },
    {
      title: "Estrutura Completa",
      description: "Acesso a toda estrutura para alunos e clientes",
      value: "Incluso",
    },
  ],

  // Depoimentos
  testimonials: [
    {
      name: "Allan Maruyama",
      content: "Comecei na Fábrica de Estilo sem saber absolutamente nada sobre a profissão. No início foi difícil, e precisei me esforçar o dobro para acompanhar e evoluir. Com o apoio e a paciência dos professores, cada desafio virou aprendizado. Essa dedicação me levou a crescer dentro da escola e a fazer parte da sua história como um dos professores da instituição. Levo comigo uma base sólida de conhecimento e valores profissionais construídos na Fábrica de Estilo.",
      rating: 5,
    },
    {
      name: "Akiko",
      content: "Fazer o curso na fábrica de estilo com o professor Marcelo foi, sem dúvida, a melhor escolha que poderia ter feito. A experiência foi incrível e superou todas as expectativas. O professor Marcelo demonstra profissionalismo, domínio do conteúdo e uma forma de ensinar clara e motivadora, que torna o aprendizado leve e, ao mesmo tempo, profundo. Cada aula foi enriquecedora e contribuiu de maneira significativa para meu crescimento. Saio desse curso com a certeza de que fiz a decisão certa e com muito aprendizado para levar adiante.",
      rating: 5,
    },
    {
      name: "Jean Marcelo",
      content: "O curso da Fabrica de Estilo superou todas as minhas expectativas em relação a técnica de corte e profissionalismo durante o atendimento, é realmente um curso mais que completo. Já conclui o curso preparado pra trazer profissionalismo e confiança para cliente, top demais.",
      rating: 5,
    },
    {
      name: "Kalina Cardoso",
      content: "O curso da fabrica de estilo foi muito bom ,técnica de corte ,barba e como fazer o atendimento ao cliente foi tudo ensinado perfeitamente !!!",
      rating: 5,
    },
    {
      name: "Massato",
      content: "Concluir o curso de barbearia na Fábrica de Estilo foi um divisor de águas na minha trajetória profissional. Desde o primeiro dia, percebi que o foco não era apenas 'cortar cabelo', mas sim entender o visagismo, o atendimento ao cliente e a arte por trás de cada detalhe. Saio daqui me sentindo um profissional completo e preparado para o mercado. Recomendo a todos que buscam excelência e técnica de verdade!",
      rating: 5,
    },
    {
      name: "Milena Airi",
      content: "Realizei um curso de barbearia com a Fábrica de estilo e não poderia estar mais satisfeita!! Aprendi técnicas avançadas de corte, degradê e barba terapia que mudaram minha visão sobre a profissão. Saio daqui com uma bagagem incrível e pronta para os desafios da barbearia. E não poderia deixar de agradecer os meus professores Allan e Marcelo",
      rating: 5,
    },
    {
      name: "Naomi Suenaga",
      content: "Gostei muito de fazer o curso, não só aprende a cortar cabelo, aprende também a como tartar os clientes, controlar as emoções na hora do corte, e que sempre son os detalhes que vas os clientes voltarem.",
      rating: 5,
    },
    {
      name: "Sérgio Hitoshi",
      content: "Quero deixar meu sincero agradecimento à Fábrica de Estilo – Scholl Barbearia por todo o aprendizado que tive durante o período em que fui aluno dessa escola. Mais do que técnicas de barbearia, aqui aprendi disciplina, responsabilidade, atendimento ao cliente e a importância de fazer cada detalhe com excelência. Cada aula, cada orientação e cada correção fizeram parte da minha evolução profissional e pessoal. Os ensinamentos recebidos durante o curso levo comigo até hoje, aplicando no dia a dia da profissão com orgulho e gratidão. Obrigado a todos os instrutores e à equipe por compartilharem conhecimento, experiência e paixão pelo que fazem. Essa formação fez diferença na minha trajetória.",
      rating: 5,
    },
    {
      name: "Willian Kayo",
      content: "Eu me impressionei com o método de ensino da Fábrica de estilo fiz o curso e no meio do curso eu já estava cortando cabelo, o método usado é fácil prático e muito bem explicado, terminei o curso cortando como um profissional. Só agradeço 🙏 e indico de mais.",
      rating: 5,
    },
  ],

  // FAQ
  faq: [
    {
      question: "Tem certificado?",
      answer: "Sim! Ao concluir o curso, você recebe um certificado profissional que pode usar no seu currículo e nas redes sociais.",
    },
    {
      question: "Serve para iniciantes completos?",
      answer: "Com certeza! O curso foi desenvolvido para levar você do zero ao avançado, passo a passo.",
    },
    {
      question: "Tem suporte para dúvidas?",
      answer: "Sim! Oferecemos suporte via grupo exclusivo.",
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos cartão de crédito (até 24x), PIX e Financiamento próprio",
    },
  ],

  // O que você vai aprender
  learningPoints: [
    "Dominar todos os tipos de degradê e fade",
    "Técnicas profissionais de barba",
    "Cortes clássicos e modernos",
    "Coloração e química capilar masculina",
    "Atendimento ao cliente de excelência",
    "Como precificar seus serviços",
    "Marketing para barbeiros",
    "Gestão financeira do negócio",
  ],

  // Para quem é
  targetAudience: [
    {
      icon: "UserPlus",
      title: "Iniciante do Zero",
      description: "Nunca cortou cabelo mas quer começar uma nova carreira",
    },
    {
      icon: "TrendingUp",
      title: "Quer Aperfeiçoar",
      description: "Já trabalha como barbeiro e quer elevar seu nível técnico",
    },
    {
      icon: "Scissors",
      title: "Trabalhar em Barbearia",
      description: "Quer se profissionalizar para conseguir emprego na área",
    },
    {
      icon: "Building",
      title: "Abrir Seu Negócio",
      description: "Sonha em ter sua própria barbearia de sucesso",
    },
    {
      icon: "RefreshCw",
      title: "Mudar de Carreira",
      description: "Busca uma profissão com alta demanda e bons ganhos",
    },
    {
      icon: "DollarSign",
      title: "Renda Extra",
      description: "Quer aprender para atender em casa ou como freelancer",
    },
  ],
};
