/* Videos data — categorised list. Also exports helpers.
   Add tools inline to any video. Set href to "" for videos with pending URL. */

export const CATEGORIES = [
  {
    id: "investigacao",
    emoji: "🕵️",
    label: "Investigação e Monitoramento",
    shortLabel: "Investigação",
    videos: [
      {
        id: "loc-tempo-real",
        title:
          "COMO OBTER A LOCALIZAÇÃO EM TEMPO REAL DE QUALQUER PESSOA DE FORMA AUTOMÁTICA",
        href: "https://www.instagram.com/reel/DZ3MVXZxnHE/?igsh=MWpwdDNndW03MDVpdw==",
        tools: [],
      },
      {
        id: "tres-ferramentas",
        title:
          "TRÊS FERRAMENTAS PRA VOCÊ APRENDER A SE PROTEGER E INVESTIGAR",
        href: "https://www.instagram.com/reel/DZ8bthLK6wA/?igsh=bnpyMGt1b3pleGwy",
        tools: [
          {
            name: "DeHashed",
            description:
              "Verifique se seus dados vazaram em brechas de segurança.",
            href: "https://dehashed.com",
            accent: "#FF6B6B",
          },
          {
            name: "Jimpl",
            description:
              "Extraia metadados (EXIF) de fotos: local, câmera e mais.",
            href: "https://jimpl.com",
            accent: "#7C5CFF",
          },
          {
            name: "Sync.me",
            description:
              "Identifique chamadas desconhecidas e o dono do número.",
            href: "https://sync.me/pt-br/",
            accent: "#22C55E",
          },
        ],
      },
      {
        id: "policia",
        title: "5 SITES QUE A POLÍCIA USA PARA INVESTIGAÇÕES",
        href: "",
        tools: [
          {
            name: "PimEyes",
            description: "Busca reversa por rosto em toda a web.",
            href: "https://pimeyes.com/en",
            accent: "#F59E0B",
          },
          {
            name: "Holehe",
            description:
              "Descobre onde um e-mail está cadastrado (100+ sites).",
            href: "https://github.com/megadose/holehe",
            accent: "#22C55E",
          },
          {
            name: "Snusbase",
            description:
              "Base de dados de vazamentos indexada por e-mail / usuário.",
            href: "https://snusbase.com/",
            accent: "#EF4444",
          },
          {
            name: "SpiderFoot",
            description: "OSINT automatizado: agrega dezenas de fontes.",
            href: "https://wigle.net/",
            accent: "#7C5CFF",
          },
        ],
      },
      {
        id: "amante",
        title:
          "QUER VER AS FOTOS QUE SEU MARIDO OU SUA ESPOSA RECEBEU DO(A) AMANTE E APAGOU?",
        href: "https://www.instagram.com/reel/DaJJz_tq6l0/?igsh=MnJyNzJ1ZzlraWZk",
        tools: [],
      },
      {
        id: "golpe-pix",
        title: "CAIU NO GOLPE DO PIX? DESCUBRA TUDO SOBRE QUEM RECEBEU",
        href: "https://www.instagram.com/reel/DaOgNtKqdAl/?igsh=MXM0eXFzazV5ZGtmcw==",
        tools: [],
      },
      {
        id: "insta-ex",
        title: "COMO VER O INSTAGRAM DO EX SEM ELE SABER",
        href: "https://www.instagram.com/reel/DaTpSV8uT2j/?igsh=ZXhpZHZiOGx0Y3hj",
        tools: [],
      },
      {
        id: "amante-conversa-trancada",
        title:
          "COMO DESCOBRIR SE O(A) AMANTE ESTÁ EM UMA CONVERSA TRANCADA NO WHATSAPP",
        href: "",
        pdf: {
          label: "Baixar o passo a passo (PDF)",
          description:
            "Guia completo em PDF para descobrir conversas trancadas no WhatsApp.",
          href: "https://drive.google.com/file/d/1hbY1PfGEnohp-gvxngCvQa8oljCtXZgY/view?usp=drivesdk",
        },
        tools: [],
      },
    ],
  },
  {
    id: "seguranca",
    emoji: "🔒",
    label: "Segurança e Privacidade Digital",
    shortLabel: "Segurança",
    videos: [
      {
        id: "mic-google",
        title: "COMO DESATIVAR O MICROFONE ESPIÃO DO GOOGLE",
        href: "https://www.instagram.com/reel/DaBeJW-KLJk/?igsh=cWVjeHJlajFlYWE=",
        tools: [],
      },
      {
        id: "grampeado",
        title: "CUIDADO!!! O SEU CELULAR PODE ESTAR SENDO GRAMPEADO 😱🚨",
        href: "https://www.instagram.com/reel/DaQ5cwTqkuv/?igsh=MTNia3dzYnhhMzBvcQ==",
        tools: [],
      },
      {
        id: "modo-manutencao",
        title:
          "COLOQUE SEU CELULAR EM MODO MANUTENÇÃO PRA NINGUÉM VER SUAS FOTOS",
        href: "",
        pdf: {
          label: "Baixar o passo a passo (PDF)",
          description:
            "Guia completo em PDF para ativar o modo manutenção e proteger suas fotos.",
          href: "https://docs.google.com/document/d/1hhNBqiVxvOcGj66za3OLuweY22LCQn43quYd9ogOPYg/edit?usp=sharing",
        },
        tools: [],
      },
    ],
  },
  {
    id: "entretenimento",
    emoji: "🎬",
    label: "Entretenimento Grátis (TV e Filmes)",
    shortLabel: "Entretenimento",
    videos: [
      {
        id: "tv-aberta",
        title: "COMO VER TV ABERTA DE QUALQUER PAÍS, E DE GRAÇA",
        href: "https://www.instagram.com/reel/DZ53Todu7NJ/?igsh=ZDZqbmV0eDJsbWt2",
        tools: [],
      },
      {
        id: "nao-pague-filmes",
        title: "ATENÇÃO: NÃO PAGUE PARA ASSISTIR FILMES",
        href: "https://www.instagram.com/reel/DaEDZWmKsoA/?igsh=MTNzaXI2OGt5amJ1aw==",
        tools: [],
      },
      {
        id: "5-canais-gratis",
        title:
          "5 CANAIS QUE EU PAGARIA CARO PARA TER ACESSO, MAS SÃO 100% GRÁTIS",
        href: "",
        tools: [
          {
            name: "NetMovies",
            description:
              "Filmes completos e clássicos legendados no YouTube, de graça.",
            href: "https://www.youtube.com/@netmovies",
            accent: "#EF4444",
          },
          {
            name: "freeCodeCamp",
            description:
              "Cursos completos de programação, do zero ao avançado.",
            href: "https://www.youtube.com/@freecodecamp",
            accent: "#22C55E",
          },
          {
            name: "Diolinux",
            description:
              "O canal referência sobre Linux, open source e tecnologia.",
            href: "https://www.youtube.com/@Diolinux",
            accent: "#F59E0B",
          },
          {
            name: "Guia Anônima",
            description:
              "Privacidade, segurança digital e OSINT em português.",
            href: "https://www.youtube.com/@guianonima",
            accent: "#7C5CFF",
          },
          {
            name: "Asimov Academy",
            description:
              "Python, ciência de dados e programação aplicada ao mercado.",
            href: "https://www.youtube.com/@AsimovAcademy",
            accent: "#06B6D4",
          },
        ],
      },
    ],
  },
  {
    id: "truques",
    emoji: "📱",
    label: "Truques e Utilitários",
    shortLabel: "Truques",
    videos: [
      {
        id: "google-storage",
        title: "COMO LIBERAR ARMAZENAMENTO NA CONTA DO GOOGLE",
        href: "https://www.instagram.com/reel/DZ-NE_PuGwt/?igsh=MWQ2bXNiY2t5ZmwyZw==",
        tools: [],
      },
      {
        id: "wpp-offline",
        title: "FIQUE OFF-LINE NO WHATSAPP SEM DESLIGAR A SUA INTERNET",
        href: "https://www.instagram.com/reel/DaG0cq7ulcM/?igsh=MXJyeGxjNWF4bjc0dg==",
        tools: [],
      },
      {
        id: "6-sites-empresas",
        title: "6 SITES GRATUITOS QUE AS EMPRESAS NÃO QUEREM QUE VOCÊ SAIBA",
        href: "",
        tools: [
          {
            name: "ToolFK",
            description:
              "Kit de ferramentas online: conversores, calculadoras, geradores.",
            href: "https://www.toolfk.com/pt",
            accent: "#FF6B6B",
          },
          {
            name: "NoBG",
            description: "Remova o fundo de qualquer imagem em segundos.",
            href: "https://nobg.space/",
            accent: "#7C5CFF",
          },
          {
            name: "MindMeister",
            description: "Crie mapas mentais online de graça.",
            href: "https://encurtador.com.br/gFuA",
            accent: "#F59E0B",
          },
          {
            name: "DeepSite",
            description: "Crie sites completos com IA sem escrever código.",
            href: "https://deepsiteai.com/pt",
            accent: "#22C55E",
          },
          {
            name: "Open Culture",
            description:
              "Milhares de cursos, livros e filmes gratuitos e legais.",
            href: "https://www.openculture.com/",
            accent: "#06B6D4",
          },
          {
            name: "CleanPNG",
            description: "Banco gigante de PNGs transparentes 100% grátis.",
            href: "https://www.cleanpng.com/",
            accent: "#EC4899",
          },
        ],
      },
      {
        id: "5-sites-parecem-ilegais",
        title: "5 SITES QUE PARECEM SER ILEGAIS MAS NÃO SÃO",
        href: "",
        tools: [
          {
            name: "10 Minute Mail",
            description:
              "E-mail temporário e descartável para evitar SPAM em cadastros.",
            href: "https://10minutemail.com/",
            accent: "#F59E0B",
          },
          {
            name: "TinyWow",
            description:
              "Mais de 200 ferramentas grátis: PDF, imagem, vídeo, IA e mais.",
            href: "https://tinywow.com/",
            accent: "#22C55E",
          },
          {
            name: "Remove.bg",
            description:
              "Remove o fundo de qualquer foto em 1 clique, sem instalar nada.",
            href: "https://www.remove.bg/pt-br",
            accent: "#EF4444",
          },
          {
            name: "123 Apps",
            description:
              "Editor completo online: áudio, vídeo, PDF, conversores.",
            href: "https://123apps.com/pt/",
            accent: "#06B6D4",
          },
          {
            name: "AlternativeTo",
            description:
              "Ache o substituto grátis de qualquer software pago.",
            href: "https://alternativeto.net/",
            accent: "#7C5CFF",
          },
        ],
      },
      {
        id: "5-sites-parecem-ilegais-2",
        title: "5 SITES QUE PARECEM ILEGAIS, MAS NÃO SÃO – PARTE 2",
        href: "",
        tools: [
          {
            name: "JustDeleteMe",
            description:
              "Guia direto para deletar sua conta em qualquer serviço online.",
            href: "https://justdeleteme.xyz/",
            accent: "#EF4444",
          },
          {
            name: "VirusTotal",
            description:
              "Analise arquivos e URLs suspeitos em 70+ antivírus ao mesmo tempo.",
            href: "https://www.virustotal.com/gui/home/upload",
            accent: "#06B6D4",
          },
          {
            name: "Kiwix",
            description:
              "Baixe a Wikipédia inteira e outros conteúdos para acessar off-line.",
            href: "https://kiwix.org/en/",
            accent: "#22C55E",
          },
          {
            name: "Privnote",
            description:
              "Envie mensagens que se autodestroem depois de lidas.",
            href: "https://privnote.com/",
            accent: "#F59E0B",
          },
          {
            name: "ToS;DR",
            description:
              "Termos de uso resumidos e classificados dos serviços que você usa.",
            href: "https://tosdr.org/en",
            accent: "#7C5CFF",
          },
        ],
      },
    ],
  },
  {
    id: "renda",
    emoji: "💰",
    label: "Renda Extra",
    shortLabel: "Renda Extra",
    videos: [
      {
        id: "4-apps-renda",
        title: "4 APLICATIVOS PARA FAZER RENDA EXTRA",
        href: "https://www.instagram.com/reel/DaWgiTuuj15/?igsh=MnB1ZGpubTEyd2w5",
        tools: [],
      },
      {
        id: "4-sites-produtos-gratis",
        title: "4 SITES QUE TE DÃO PRODUTOS DE GRAÇA PARA TESTAR",
        href: "",
        tools: [
          {
            name: "Home Tester Club",
            description:
              "Receba produtos em casa para testar e dar sua opinião.",
            href: "https://www.hometesterclub.com/br/pt",
            accent: "#22C55E",
          },
          {
            name: "The Insiders",
            description:
              "Comunidade que envia amostras grátis em troca de reviews.",
            href: "https://www.theinsidersnet.com/pt-br",
            accent: "#F59E0B",
          },
          {
            name: "Influenster",
            description:
              "Ganhe VoxBoxes com produtos para experimentar e avaliar.",
            href: "https://www.influenster.com/",
            accent: "#EC4899",
          },
          {
            name: "Eu Quero Nestlé",
            description:
              "Programa oficial da Nestlé com amostras, cupons e ofertas.",
            href: "https://www.euqueronestle.com.br/",
            accent: "#EF4444",
          },
        ],
      },
      {
        id: "3-sites-produtos-gratis",
        title: "3 SITES QUE TE DÃO PRODUTOS DE GRAÇA – PARTE 2",
        href: "",
        tools: [
          {
            name: "Big Tester",
            description:
              "Cadastre-se, faça missões e ganhe produtos de graça pra testar.",
            href: "https://www.bigtester.com.br/",
            accent: "#22C55E",
          },
          {
            name: "Toluna",
            description:
              "Responda pesquisas e receba pontos, brindes e cupons de desconto.",
            href: "https://www.toluna.com/group/guest",
            accent: "#7C5CFF",
          },
          {
            name: "Mimoo",
            description:
              "Recebe mimos e amostras grátis de marcas parceiras direto em casa.",
            href: "https://mimoo.dev/",
            accent: "#EC4899",
          },
        ],
      },
    ],
  },
];

export function findVideoById(id) {
  for (const cat of CATEGORIES) {
    const v = cat.videos.find((x) => x.id === id);
    if (v) return { video: v, category: cat };
  }
  return null;
}
