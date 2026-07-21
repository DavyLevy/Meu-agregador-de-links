/* Videos data — categorised list. Also exports helpers.
   Each video has:
     - id: internal id (legacy /v/:id links)
     - slug: padronised Link-da-Bio code /DDMMAAAAvX
     - date: display date DD/MM/AAAA
     - href: Instagram Reel link ("" => "Vídeo em breve")
     - tools: array of cited tools/sites
     - pdf (optional): downloadable step-by-step material */

export const CATEGORIES = [
  {
    id: "investigacao",
    emoji: "🕵️",
    label: "Investigação e Monitoramento",
    shortLabel: "Investigação",
    videos: [
      {
        id: "loc-tempo-real",
        slug: "21062026v1",
        date: "21/06/2026",
        title:
          "COMO OBTER A LOCALIZAÇÃO EM TEMPO REAL DE QUALQUER PESSOA DE FORMA AUTOMÁTICA",
        href: "https://www.instagram.com/reel/DZ3MVXZxnHE/?igsh=MWpwdDNndW03MDVpdw==",
        tools: [],
      },
      {
        id: "tres-ferramentas",
        slug: "23062026v1",
        date: "23/06/2026",
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
        slug: "04072026v1",
        date: "04/07/2026",
        title: "5 SITES QUE A POLÍCIA USA PARA INVESTIGAÇÕES",
        href: "https://www.instagram.com/reel/DaYzzbhqdBd/?igsh=MXh1and3aGk0aTIzeQ==",
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
        slug: "28062026v1",
        date: "28/06/2026",
        title:
          "QUER VER AS FOTOS QUE SEU MARIDO OU SUA ESPOSA RECEBEU DO(A) AMANTE E APAGOU?",
        href: "https://www.instagram.com/reel/DaJJz_tq6l0/?igsh=MnJyNzJ1ZzlraWZk",
        tools: [],
      },
      {
        id: "golpe-pix",
        slug: "30062026v1",
        date: "30/06/2026",
        title: "CAIU NO GOLPE DO PIX? DESCUBRA TUDO SOBRE QUEM RECEBEU",
        href: "https://www.instagram.com/reel/DaOgNtKqdAl/?igsh=MXM0eXFzazV5ZGtmcw==",
        tools: [],
      },
      {
        id: "insta-ex",
        slug: "02062026v1",
        date: "02/06/2026",
        title: "COMO VER O INSTAGRAM DO EX SEM ELE SABER",
        href: "https://www.instagram.com/reel/DaTpSV8uT2j/?igsh=ZXhpZHZiOGx0Y3hj",
        tools: [],
      },
      {
        id: "amante-conversa-trancada",
        slug: "11072026v1",
        date: "11/07/2026",
        title:
          "COMO DESCOBRIR SE O(A) AMANTE ESTÁ EM UMA CONVERSA TRANCADA NO WHATSAPP",
        href: "https://www.instagram.com/reel/DaquVN0KaH4/?igsh=MTdrejg4eHR6ZmpkNg==",
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
        slug: "26062026v1",
        date: "26/06/2026",
        title: "ATENÇÃO: O GOOGLE GRAVA TUDO O QUE VOCÊ FALA",
        href: "https://www.instagram.com/reel/DaBeJW-KLJk/?igsh=cWVjeHJlajFlYWE=",
        tools: [],
      },
      {
        id: "grampeado",
        slug: "01072026v1",
        date: "01/07/2026",
        title: "CUIDADO!!! O SEU CELULAR PODE ESTAR SENDO GRAMPEADO 😱🚨",
        href: "https://www.instagram.com/reel/DaQ5cwTqkuv/?igsh=MTNia3dzYnhhMzBvcQ==",
        tools: [],
      },
      {
        id: "blinde-celular-furtos",
        slug: "14072026v1",
        date: "14/07/2026",
        title: "BLINDE SEU CELULAR CONTRA FURTOS – PARTE 1",
        href: "https://www.instagram.com/reel/DaycBObKpJX/?igsh=MWNtODgwaWVvbGJnNQ==",
        tools: [],
      },
      {
        id: "modo-manutencao",
        slug: "13062026v1",
        date: "13/06/2026",
        title:
          "COLOQUE SEU CELULAR EM MODO MANUTENÇÃO PRA NINGUÉM VER SUAS FOTOS",
        href: "https://www.instagram.com/reel/DavwNoHKP6Y/?igsh=ZWtuNXhyMm5ob3l1",
        pdf: {
          label: "Baixar o passo a passo (PDF)",
          description:
            "Guia completo em PDF para ativar o modo manutenção e proteger suas fotos.",
          href: "https://docs.google.com/document/d/1hhNBqiVxvOcGj66za3OLuweY22LCQn43quYd9ogOPYg/edit?usp=sharing",
        },
        tools: [],
      },
      {
        id: "whatsapp-mensagens-lidas",
        slug: "20072026v1",
        date: "20/07/2026",
        title:
          "SUAS MENSAGENS DO WHATSAPP PODEM ESTAR SENDO LIDAS POR OUTRA PESSOA",
        href: "https://www.instagram.com/reel/DbBrvAqqvFK/?igsh=YnFtcjF2MnRndWE3",
        pdf: {
          label: "Baixar o passo a passo (PDF)",
          description:
            "Guia completo em PDF para descobrir e bloquear quem lê suas mensagens do WhatsApp.",
          href: "https://drive.google.com/file/d/1akgaedwtdE-k_0yCxfUW4UTm-w5pCTlR/view?usp=sharing",
        },
        tools: [],
      },
      {
        id: "cpf-emprestimos",
        slug: "21072026v1",
        date: "21/07/2026",
        title:
          "O SEU CPF PODE TER EMPRÉSTIMOS SEM O SEU CONSENTIMENTO",
        href: "",
        pdf: {
          label: "Baixar o passo a passo (PDF)",
          description:
            "Guia completo em PDF para consultar empréstimos feitos no seu CPF.",
          href: "https://drive.google.com/file/d/1X36nlkeSMQ1tw9XUsVxjlMANR-sC0t0c/view?usp=sharing",
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
        slug: "22062026v1",
        date: "22/06/2026",
        title: "COMO VER TV ABERTA DE QUALQUER PAÍS, E DE GRAÇA",
        href: "https://www.instagram.com/reel/DZ53Todu7NJ/?igsh=ZDZqbmV0eDJsbWt2",
        tools: [],
      },
      {
        id: "nao-pague-filmes",
        slug: "12072026v1",
        date: "12/07/2026",
        title: "ATENÇÃO: NÃO PAGUE PARA ASSISTIR FILMES",
        href: "https://www.instagram.com/reel/DaEDZWmKsoA/?igsh=MTNzaXI2OGt5amJ1aw==",
        tools: [],
      },
      {
        id: "5-canais-gratis",
        slug: "07072026v1",
        date: "07/07/2026",
        title:
          "5 CANAIS QUE EU PAGARIA CARO PARA TER ACESSO, MAS SÃO 100% GRÁTIS",
        href: "https://www.instagram.com/reel/DagXqxXK2gj/?igsh=MWxiYTN0c2tkYzJtbg==",
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
      {
        id: "5-canais-gratis-2",
        slug: "15072026v1",
        date: "15/07/2026",
        title:
          "5 CANAIS QUE EU PAGARIA CARO PRA TER ACESSO, MAS SÃO 100% GRÁTIS – PARTE 2",
        href: "https://www.instagram.com/reel/Da1Be8QK0PP/?igsh=NWw5bXk2bTh4d2F4",
        tools: [
          {
            name: "Gabriel Pato",
            description:
              "Hacking ético e segurança da informação na prática.",
            href: "https://www.youtube.com/@GabrielPato",
            accent: "#EF4444",
          },
          {
            name: "Curso em Vídeo",
            description:
              "Cursos completos de programação com o professor Gustavo Guanabara.",
            href: "https://www.youtube.com/@cursoemvideo",
            accent: "#22C55E",
          },
          {
            name: "Mente Binária",
            description:
              "Engenharia reversa, análise de malware e segurança avançada.",
            href: "https://www.youtube.com/@mentebinaria",
            accent: "#7C5CFF",
          },
          {
            name: "Filipe Deschamps",
            description:
              "Programação e tecnologia explicadas de um jeito simples e divertido.",
            href: "https://www.youtube.com/@FilipeDeschamps",
            accent: "#F59E0B",
          },
          {
            name: "UNIVESP",
            description:
              "Aulas completas de universidade pública, de graça no YouTube.",
            href: "https://www.youtube.com/@UNIVESPTV",
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
        slug: "24062026v1",
        date: "24/06/2026",
        title: "COMO LIBERAR ARMAZENAMENTO NA CONTA DO GOOGLE",
        href: "https://www.instagram.com/reel/DZ-NE_PuGwt/?igsh=MWQ2bXNiY2t5ZmwyZw==",
        tools: [],
      },
      {
        id: "wpp-offline",
        slug: "27062026v1",
        date: "27/06/2026",
        title: "FIQUE OFF-LINE NO WHATSAPP SEM DESLIGAR A SUA INTERNET",
        href: "https://www.instagram.com/reel/DaG0cq7ulcM/?igsh=MXJyeGxjNWF4bjc0dg==",
        tools: [],
      },
      {
        id: "6-sites-empresas",
        slug: "05072026v1",
        date: "05/07/2026",
        title: "6 SITES GRATUITOS QUE AS EMPRESAS NÃO QUEREM QUE VOCÊ SAIBA",
        href: "https://www.instagram.com/reel/DabYaF1qsQi/?igsh=cGh1N3MyOXRlejE3",
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
        slug: "06072026v1",
        date: "06/07/2026",
        title: "5 SITES QUE PARECEM SER ILEGAIS MAS NÃO SÃO",
        href: "https://www.instagram.com/reel/Dad8ht-q6k8/?igsh=ZWZ4eWhqYW9tcWU3",
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
        slug: "09072026v1",
        date: "09/07/2026",
        title: "5 SITES QUE PARECEM ILEGAIS, MAS NÃO SÃO – PARTE 2",
        href: "https://www.instagram.com/reel/DaleuYNqAsB/?igsh=cHEyNDZ3ZzFhZGd5",
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
      {
        id: "gerar-imagens-ia",
        slug: "16072026v1",
        date: "16/07/2026",
        title:
          "APRENDA A GERAR IMAGENS DE QUALIDADE COM INTELIGÊNCIA ARTIFICIAL",
        href: "https://www.instagram.com/reel/Da3ndvTK1ep/?igsh=MTN2Nmh4MjV4cnlvYw==",
        tools: [],
      },
      {
        id: "5-sites-facilitar-vida",
        slug: "17062026v1",
        date: "17/06/2026",
        title: "5 SITES QUE VÃO FACILITAR A SUA VIDA",
        href: "https://www.instagram.com/reel/Da6JcaNqGa1/?igsh=cHBiZWFucDk2Nmc2",
        tools: [
          {
            name: "Photopea",
            description:
              "Editor de imagens completo (tipo Photoshop) grátis e no navegador.",
            href: "https://www.photopea.com",
            accent: "#06B6D4",
          },
          {
            name: "TinyWow",
            description:
              "Mais de 200 ferramentas grátis: PDF, imagem, vídeo, IA e mais.",
            href: "https://tinywow.com",
            accent: "#22C55E",
          },
          {
            name: "CapCut Web",
            description:
              "Edite vídeos direto no navegador, sem instalar nada.",
            href: "https://www.capcut.com",
            accent: "#7C5CFF",
          },
          {
            name: "Pexels",
            description:
              "Banco de fotos e vídeos gratuitos e livres de direitos autorais.",
            href: "https://www.pexels.com",
            accent: "#F59E0B",
          },
          {
            name: "AlternativeTo",
            description:
              "Ache o substituto grátis de qualquer software pago.",
            href: "https://alternativeto.net",
            accent: "#EF4444",
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
        slug: "03072026v1",
        date: "03/07/2026",
        title: "4 APLICATIVOS PARA FAZER RENDA EXTRA",
        href: "https://www.instagram.com/reel/DaWgiTuuj15/?igsh=MnB1ZGpubTEyd2w5",
        tools: [],
      },
      {
        id: "4-sites-produtos-gratis",
        slug: "08072026v1",
        date: "08/07/2026",
        title: "4 SITES QUE TE DÃO PRODUTOS DE GRAÇA PARA TESTAR",
        href: "https://www.instagram.com/reel/Dai7dK6KSRx/?igsh=OHFkeHZja29oMmIz",
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
        slug: "10072026v1",
        date: "10/07/2026",
        title: "3 SITES QUE TE DÃO PRODUTOS DE GRAÇA – PARTE 2",
        href: "https://www.instagram.com/reel/DaoFOkFKU3Z/?igsh=MTYya3M0cnk1NWNtaw==",
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
      {
        id: "dinheiro-para-receber",
        slug: "18072026v1",
        date: "18/07/2026",
        title: "VOCÊ TEM DINHEIRO PARA RECEBER AGORA MESMO",
        href: "https://www.instagram.com/reel/Da8p_uPK39E/?igsh=dzVjemJ3Z2d0cm80",
        pdf: {
          label: "Baixar o passo a passo (PDF)",
          description:
            "Guia completo em PDF para consultar e resgatar dinheiro esquecido no seu nome.",
          href: "https://docs.google.com/document/d/1hLYuCGfK-onWLW4BwqSGCWxfCj-mriqMg21ExfMmeJ4/edit?usp=drivesdk",
        },
        tools: [],
      },
      {
        id: "ganhe-dinheiro-celular",
        slug: "19072026v1",
        date: "19/07/2026",
        title: "GANHE DINHEIRO AINDA HOJE USANDO APENAS O SEU CELULAR",
        href: "https://www.instagram.com/reel/Da-l354OV1D/?igsh=YmRyZTFvMmp1YW9s",
        pdf: {
          label: "Baixar o passo a passo (PDF)",
          description:
            "Guia completo em PDF para começar a ganhar dinheiro pelo celular.",
          href: "https://drive.google.com/file/d/1yDh-jUAZvKJjqHNJ_GV0vsxZY7J1ZYYQ/view?usp=sharing",
        },
        tools: [
          {
            name: "Pinion (iOS)",
            description:
              "Baixe o app Pinion na App Store e ganhe cumprindo missões.",
            href: "https://apps.apple.com/br/app/pinion/id591534544",
            accent: "#06B6D4",
          },
          {
            name: "Pinion (Android)",
            description:
              "Baixe o app Pinion no Google Play e ganhe cumprindo missões.",
            href: "https://play.google.com/store/apps/details?id=br.com.pinion",
            accent: "#22C55E",
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

export function findVideoBySlug(slug) {
  for (const cat of CATEGORIES) {
    const v = cat.videos.find((x) => x.slug === slug);
    if (v) return { video: v, category: cat };
  }
  return null;
}

/* Resolve a video by either padronised slug (/DDMMAAAAvX) or legacy id (/v/:id). */
export function findVideo(key) {
  return findVideoBySlug(key) || findVideoById(key);
}

/* Groups (category → videos that have tools or PDF) used by the Ferramentas page. */
export function getToolGroups() {
  return CATEGORIES.map((cat) => ({
    ...cat,
    videos: cat.videos.filter(
      (v) => (v.tools && v.tools.length > 0) || v.pdf,
    ),
  })).filter((cat) => cat.videos.length > 0);
}
